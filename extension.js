const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

// Глобальна змінна для шляху до файла snippets
let snippetsFilePath;

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Code Snippets Inserter активовано!');

    // Визначаємо шлях до файла snippets в globalStorage
    const storageUri = context.globalStorageUri;
    snippetsFilePath = path.join(storageUri.fsPath, 'snippets.json');

    // Створюємо папку та файл при першому запуску
    initializeSnippetsFile();

    // Команда для вставки snippet
    let insertSnippetCommand = vscode.commands.registerCommand('codeSnippetsInserter.insertSnippet', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('Відкрийте файл для вставки коду');
            return;
        }

        const snippets = loadSnippets();

        if (Object.keys(snippets).length === 0) {
            const openFile = await vscode.window.showWarningMessage(
                'Немає налаштованих snippets. Відкрити файл snippets.json?',
                'Відкрити', 'Скасувати'
            );
            if (openFile === 'Відкрити') {
                vscode.commands.executeCommand('codeSnippetsInserter.openSnippetsFile');
            }
            return;
        }

        // Створюємо Quick Pick з snippets
        const items = Object.keys(snippets).map(key => ({
            label: key,
            description: snippets[key].description || '',
            snippet: snippets[key]
        }));

        const selected = await vscode.window.showQuickPick(items, {
            placeHolder: 'Оберіть snippet для вставки',
            matchOnDescription: true
        });

        if (selected) {
            insertSnippet(editor, selected.snippet.code);
        }
    });

    // Команда для відкриття файла snippets.json
    let openSnippetsFileCommand = vscode.commands.registerCommand('codeSnippetsInserter.openSnippetsFile', async () => {
        const doc = await vscode.workspace.openTextDocument(snippetsFilePath);
        await vscode.window.showTextDocument(doc);
        vscode.window.showInformationMessage(`📝 Відредагуйте snippets та збережіть файл (Cmd+S або Ctrl+S)`);
    });

    // Команда для відкриття папки зі snippets
    let openSnippetsFolderCommand = vscode.commands.registerCommand('codeSnippetsInserter.openSnippetsFolder', async () => {
        const folderUri = vscode.Uri.file(path.dirname(snippetsFilePath));
        await vscode.commands.executeCommand('revealFileInOS', folderUri);
    });

    // TreeView для сайдбару
    const treeDataProvider = new SnippetsTreeDataProvider();
    vscode.window.registerTreeDataProvider('codeSnippetsTreeView', treeDataProvider);

    // Оновлення TreeView при зміні файла snippets.json
    const fileWatcher = vscode.workspace.createFileSystemWatcher(snippetsFilePath);
    fileWatcher.onDidChange(() => treeDataProvider.refresh());
    fileWatcher.onDidCreate(() => treeDataProvider.refresh());
    fileWatcher.onDidDelete(() => treeDataProvider.refresh());

    // Клік по елементу в TreeView
    vscode.commands.registerCommand('codeSnippetsInserter.insertFromTree', (snippet) => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('Відкрийте файл для вставки коду');
            return;
        }
        insertSnippet(editor, snippet.code);
    });

    context.subscriptions.push(
        insertSnippetCommand, 
        openSnippetsFileCommand, 
        openSnippetsFolderCommand,
        fileWatcher
    );
}

/**
 * Ініціалізація файла snippets при першому запуску
 */
function initializeSnippetsFile() {
    const dir = path.dirname(snippetsFilePath);
    
    // Створюємо папку, якщо не існує
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    // Створюємо файл з прикладами, якщо не існує
    if (!fs.existsSync(snippetsFilePath)) {
        const defaultSnippets = {
            "HTML Шаблон": {
                "code": "<!DOCTYPE html>\\n<html lang=\"uk\">\\n<head>\\n    <meta charset=\"UTF-8\">\\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n    <title>${1:Document}</title>\\n</head>\\n<body>\\n    ${2:<!-- content -->}\\n</body>\\n</html>",
                "description": "Базовий HTML5 шаблон"
            },
            "CSS Flexbox": {
                "code": ".${1:container} {\\n    display: flex;\\n    justify-content: ${2:center};\\n    align-items: ${3:center};\\n}",
                "description": "Flexbox контейнер"
            },
            "JS Function": {
                "code": "function ${1:functionName}(${2:params}) {\\n    ${3:// code}\\n    return ${0};\\n}",
                "description": "JavaScript функція"
            }
        };
        
        fs.writeFileSync(snippetsFilePath, JSON.stringify(defaultSnippets, null, 2), 'utf-8');
        console.log('✅ Створено файл snippets.json з прикладами');
    }
}

/**
 * Завантаження snippets з файла
 */
function loadSnippets() {
    try {
        if (!fs.existsSync(snippetsFilePath)) {
            return {};
        }
        
        const content = fs.readFileSync(snippetsFilePath, 'utf-8');
        return JSON.parse(content);
    } catch (error) {
        vscode.window.showErrorMessage(`Помилка читання snippets.json: ${error.message}`);
        return {};
    }
}

/**
 * Розекранування спеціальних символів з JSON
 * Після JSON.parse ми маємо буквальні символи \n як два символи (слеш + n)
 * Потрібно замінити їх на реальні escape-послідовності
 */
function unescapeSnippetCode(code) {
    // Використовуємо regex з правильним екрануванням
    let result = code;
    
    // Спочатку обробляємо подвійні слеші (щоб не зіпсувати інші заміни)
    result = result.replace(/\\\\/g, '\u0000'); // Тимчасова заміна
    
    // Тепер обробляємо escape-послідовності (використовуємо regex!)
    result = result.replace(/\\n/g, '\n');   // Переноси рядків
    result = result.replace(/\\r/g, '\r');   // Повернення каретки
    result = result.replace(/\\t/g, '\t');   // Табуляція
    result = result.replace(/\\"/g, '"');    // Подвійні лапки
    result = result.replace(/\\\$/g, '$');   // Долари для PHP змінних (екранований $ в regex!)
    
    // Повертаємо подвійні слеші назад
    result = result.replace(/\u0000/g, '\\');
    
    return result;
}

/**
 * Вставка snippet з підтримкою placeholders
 */
function insertSnippet(editor, code) {
    // Розекрановуємо спеціальні символи перед вставкою
    const unescapedCode = unescapeSnippetCode(code);
    console.log('Original code:', code);
    console.log('Unescaped code:', unescapedCode);
    
    // ВАЖЛИВО: SnippetString інтерпретує $ як placeholder!
    // Екрануємо $ тільки якщо це НЕ placeholder (тобто після $ НЕ йде "{")
    // Regex: /\$(?!\{)/g означає "$ який НЕ за яким йде {"
    // Це екранує $price, але залишає ${1:name} без змін
    const escapedForSnippet = unescapedCode.replace(/\$(?!\{)/g, '\\$');
    
    const snippet = new vscode.SnippetString(escapedForSnippet);
    editor.insertSnippet(snippet);
    vscode.window.showInformationMessage('✅ Snippet вставлено!');
}

/**
 * TreeView Data Provider для сайдбару
 */
class SnippetsTreeDataProvider {
    constructor() {
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
    }

    refresh() {
        this._onDidChangeTreeData.fire();
    }

    getTreeItem(element) {
        return element;
    }

    getChildren() {
        const snippets = loadSnippets();

        if (Object.keys(snippets).length === 0) {
            return [];
        }

        return Object.keys(snippets).map(key => {
            const item = new vscode.TreeItem(key, vscode.TreeItemCollapsibleState.None);
            item.tooltip = snippets[key].description || key;
            item.description = snippets[key].description || '';
            item.command = {
                command: 'codeSnippetsInserter.insertFromTree',
                title: 'Вставити snippet',
                arguments: [snippets[key]]
            };
            item.iconPath = new vscode.ThemeIcon('code');
            return item;
        });
    }
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}
