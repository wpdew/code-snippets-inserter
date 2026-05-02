# Code Snippets Inserter 📝

VS Code розширення для швидкої вставки готових шматків коду. Snippets зберігаються в окремому JSON файлі, що не засмічує загальні налаштування VS Code.

---

## 📚 Документація

**Швидкий доступ:**
- 🚀 **[QUICKSTART.md](QUICKSTART.md)** - Встановлення за 5 хвилин
- 📖 **[USER_GUIDE.md](USER_GUIDE.md)** - Повна інструкція користувача
- � **[MIGRATION.md](MIGRATION.md)** - Міграція на версію 2.0.0
- 🔧 **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** - Вирішення проблем (чеклист)
- 💡 **[EXAMPLES.md](EXAMPLES.md)** - Готові приклади snippets
- 📝 **[snippets.json.example](snippets.json.example)** - Приклад файла з snippets
- 🛠️ **[ICON_INSTRUCTIONS.md](ICON_INSTRUCTIONS.md)** - Створення іконки

**Скрипти:**
- `./install-and-test.sh` - Автоматичне встановлення та тестування
- `./convert-icon.sh` - Конвертація SVG → PNG іконки

---

## ✨ Особливості

- 🚀 **Швидка вставка** - вставляйте готові шматки коду за секунди
- 📁 **Окремий файл** - snippets зберігаються в `snippets.json`, не засмічуючи settings.json
- ⚙️ **Гнучкі налаштування** - редагуйте snippets у зручному JSON файлі
- 🎯 **Sidebar панель** - зручний доступ до всіх snippets з білою іконкою
- ⌨️ **Гарячі клавіші** - `Ctrl+Shift+I` (Windows/Linux) або `Cmd+Shift+I` (Mac)
- 💡 **Підтримка placeholders** - використовуйте `${1:placeholder}` для табуляції
- 🎨 **Контекстне меню** - вставка через правий клік в редакторі
- 🔄 **Автооновлення** - зміни в snippets.json відразу застосовуються

## 📦 Встановлення

### 🎯 Автоматичне встановлення (Рекомендовано)

**Найпростіший спосіб - використайте скрипт:**

```bash
./install-and-test.sh
```

Скрипт автоматично:
- ✅ Перевірить наявність іконки
- ✅ Встановить залежності
- ✅ Упакує VSIX
- ✅ Встановить розширення
- ✅ Перевірить встановлення

---

### 🔧 Ручне встановлення

#### ⚠️ ВАЖЛИВО: Створіть іконку PNG

**Варіант 1: Автоматичний скрипт**
```bash
./convert-icon.sh
```

**Варіант 2: Онлайн конвертер (найпростіше)**
1. Відкрийте https://cloudconvert.com/svg-to-png
2. Завантажте `images/icon.svg`
3. Встановіть розмір: **128x128px**
4. Збережіть як `images/icon.png`

**Варіант 3: ImageMagick**
```bash
convert -background none -size 128x128 images/icon.svg images/icon.png
```

**Варіант 4: Без іконки**
```json
// У package.json закоментуйте:
// "icon": "images/icon.png",
```

Детальніше: [ICON_INSTRUCTIONS.md](ICON_INSTRUCTIONS.md)

---

#### Кроки встановлення

**Крок 1: Зберіть розширення**
```bash
cd /Users/aleks/TEMP_WORKFLOW/wpdews_vs_plugin
npm install
npm install -g @vscode/vsce
vsce package
```

**Крок 2: Встановіть в VS Code**
- Відкрийте VS Code
- Натисніть `Cmd+Shift+P` (Mac) або `Ctrl+Shift+P` (Win/Linux)
- Введіть: **Extensions: Install from VSIX...**
- Оберіть файл `code-snippets-inserter-1.0.0.vsix`
- Натисніть **Reload Now**

**Крок 3: Перевірте встановлення**
- `Cmd+Shift+X` → пошук "Code Snippets Inserter"
- Має бути в списку встановлених (зелена галочка ✓)
- На Activity Bar (ліва панель) з'явиться іконка `</>`

---

### 🔧 Спосіб 2: Режим розробки

1. Відкрийте папку розширення в VS Code
2. Натисніть `F5`
3. Відкриється нове вікно "Extension Development Host"

## 🎯 Використання

### 1. Через Command Palette

1. Натисніть `Ctrl+Shift+P` (або `Cmd+Shift+P` на Mac)
2. Введіть "Вставити шматок коду"
3. Оберіть потрібний snippet зі списку

### 2. Через Sidebar

1. Клікніть на іконку з кодом `</>` на лівій панелі
2. Відобразиться список всіх ваших snippets
3. Клікніть на потрібний snippet для вставки

### 3. Через гарячі клавіші

- Windows/Linux: `Ctrl+Shift+I`
- Mac: `Cmd+Shift+I`

### 4. Через контекстне меню

1. Правий клік в редакторі
2. Оберіть "Вставити шматок коду"

## ⚙️ Налаштування Snippets

### Де знаходиться файл snippets.json?

Файл зберігається в глобальному сховищі VS Code:
- **Mac**: `~/Library/Application Support/Code/User/globalStorage/wpdews.code-snippets-inserter/snippets.json`
- **Windows**: `%APPDATA%\Code\User\globalStorage\wpdews.code-snippets-inserter\snippets.json`
- **Linux**: `~/.config/Code/User/globalStorage/wpdews.code-snippets-inserter/snippets.json`

### Відкриття файла snippets.json

**Спосіб 1: Через команду (Рекомендовано)**
1. `Cmd+Shift+P` (або `Ctrl+Shift+P`)
2. Введіть: **Code Snippets: Відкрити файл snippets.json**

**Спосіб 2: Через sidebar**
1. Клікніть на іконку `</>` на лівій панелі
2. Якщо немає snippets - з'явиться кнопка "Відкрити snippets.json"

**Спосіб 3: Відкрити папку**
- Command Palette → **Code Snippets: Відкрити папку зі snippets**

### Формат файла

```json
{
  "Назва Snippet": {
    "code": "код snippet з \\n для нових рядків",
    "description": "опис snippet"
  },
  "Інший Snippet": {
    "code": "інший код",
    "description": "інший опис"
  }
}
```

---

## 🎓 Як створити новий snippet - Покрокова інструкція

### Крок 1: Відкрийте snippets.json

**Варіант A: Через команду розширення (Найпростіше)**
1. `Cmd+Shift+P` (або `Ctrl+Shift+P`)
2. Введіть: **Code Snippets: Відкрити файл snippets.json**

**Варіант B: Через sidebar**
1. Клікніть на іконку `</>` на лівій панелі
2. Клікніть "Відкрити snippets.json" (якщо список порожній)

### Крок 2: Додайте новий snippet

В файлі `snippets.json` додайте новий елемент:

```json
{
  "HTML Шаблон": {
    "code": "...",
    "description": "..."
  },
  
  // ✅ Додайте ваш новий snippet тут
  "Моя Laravel Міграція": {
    "code": "Schema::create('${1:table_name}', function (Blueprint $table) {\\n    $table->id();\\n    $table->${2:string}('${3:column}');\\n    $table->timestamps();\\n});",
    "description": "Laravel міграція створення таблиці"
  }
}
```

⚠️ **ВАЖЛИВО:**
- Використовуйте `\\n` для нових рядків (подвійний слеш!)
- Не забувайте коми між елементами
- Останній елемент БЕЗ коми в кінці

### Крок 3: Збережіть файл

- Натисніть `Cmd+S` (або `Ctrl+S`)
- Snippet автоматично з'явиться в списку
- Оновлення в sidebar відбудеться миттєво

### Крок 4: Використайте snippet

1. Відкрийте будь-який файл
2. `Cmd+Shift+I` (або `Ctrl+Shift+I`)
3. Оберіть "Моя Laravel Міграція"
4. Код вставиться з можливістю табуляції між параметрами

---

## 💡 Поради по створенню snippets

### 1. Використовуйте placeholders для табуляції

**Синтаксис:**
- `${1:default_value}` - перша позиція табуляції
- `${2:другий}` - друга позиція
- `${0}` - фінальна позиція курсора

**Приклад:**
```json
"Vue Component": {
  "code": "<template>\n  <div class=\"${1:component-name}\">\n    ${2:content}\n  </div>\n</template>\n\n<script>\nexport default {\n  name: '${1:ComponentName}'\n}\n</script>",
  "description": "Vue компонента з автозаміною імені"
}
```

При вставці:
1. Курсор стане на `${1:component-name}` → введіть назву
2. Натисніть `Tab` → курсор на `${2:content}`
3. Натисніть `Tab` → курсор повернеться до другого `${1:ComponentName}` (автоматично змінено!)

### 2. Екрануйте спеціальні символи в JSON

- Новий рядок: `\\n` (подвійний слеш!)
- Табуляція: `\\t`
- Подвійні лапки: `\"`
- Зворотний слеш: `\\\\`

**Приклад:**
```json
{
  "PHP Namespace": {
    "code": "<?php\\n\\nnamespace App\\\\Models;\\n\\nclass ${1:Name}\\n{\\n\\t${0}\\n}",
    "description": "PHP клас з namespace"
  }
}
```

### 3. Групуйте за типами

Використовуйте префікси для організації:

```json
{
  "HTML - Form": { "code": "...", "description": "..." },
  "HTML - Table": { "code": "...", "description": "..." },
  "PHP - Class": { "code": "...", "description": "..." },
  "PHP - Interface": { "code": "...", "description": "..." },
  "JS - Promise": { "code": "...", "description": "..." },
  "JS - Async": { "code": "...", "description": "..." }
}
```

### 4. Додавайте детальні описи

Описи з'являються в Quick Pick меню - робіть їх інформативними:

```json
"Laravel Controller": {
  "code": "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse Illuminate\\Http\\Request;\n\nclass ${1:Name}Controller extends Controller\n{\n    public function index()\n    {\n        ${0:// code}\n    }\n}",
  "description": "Laravel контролер з методом index (Resource Controller pattern)"
}
```

---

### Приклади snippets

Дивіться повний файл прикладів: [snippets.json.example](snippets.json.example)

#### HTML Шаблон
```json
{
  "HTML5 Template": {
    "code": "<!DOCTYPE html>\\n<html lang=\"uk\">\\n<head>\\n    <meta charset=\"UTF-8\">\\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n    <title>${1:Document}</title>\\n</head>\\n<body>\\n    ${2:<!-- content -->}\\n</body>\\n</html>",
    "description": "Базовий HTML5 шаблон з placeholders"
  }
}
```

#### PHP Form Handler
```json
{
  "PHP Form Handler": {
    "code": "<?php\\nif ($_SERVER['REQUEST_METHOD'] === 'POST') {\\n    $data = $_POST['${1:field}'];\\n    \\n    // Валідація\\n    if (empty($data)) {\\n        http_response_code(400);\\n        echo json_encode(['error' => 'Поле обов\\\\'язкове']);\\n        exit;\\n    }\\n    \\n    // Обробка\\n    ${2:// code}\\n    \\n    echo json_encode(['success' => true]);\\n}\\n?>",
    "description": "PHP обробник форми з JSON відповіддю"
  }
}
```

#### React Component
```json
{
  "React Functional Component": {
    "code": "import React from 'react';\\n\\nconst ${1:ComponentName} = () => {\\n    return (\\n        <div>\\n            ${2:<!-- content -->}\\n        </div>\\n    );\\n};\\n\\nexport default ${1:ComponentName};",
    "description": "React функціональний компонент"
  }
}
```

#### SCSS Mixin
```json
{
  "SCSS Flexbox Mixin": {
    "code": "@mixin flex-center {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.${1:container} {\\n    @include flex-center;\\n    ${2:// additional styles}\\n}",
    "description": "SCSS міксин для центрування"
  }
}
```

#### jQuery AJAX
```json
{
  "jQuery AJAX Request": {
    "code": "$.ajax({\\n    url: '${1:url}',\\n    type: '${2:POST}',\\n    data: ${3:data},\\n    success: function(response) {\\n        ${4:// success}\\n    },\\n    error: function(xhr, status, error) {\\n        ${5:// error}\\n    }\\n});",
    "description": "jQuery AJAX запит"
  }
}
```

## 💡 Підтримка Placeholders

Використовуйте VS Code placeholders для табуляції між полями:

- `${1:placeholder}` - перший табстоп
- `${2:placeholder}` - другий табстоп
- `${0}` - фінальна позиція курсора

**Приклад:**
```json
{
  "JS Function": {
    "code": "function ${1:functionName}(${2:params}) {\n    ${3:// code}\n    return ${0};\n}",
    "description": "Функція з табстопами"
  }
}
```

## 📁 Структура проекту

```
wpdews_vs_plugin/
├── extension.js           # Основний код розширення
├── package.json          # Конфігурація розширення
├── images/
│   ├── sidebar-icon.svg  # Біла іконка для sidebar
│   └── icon.png          # Головна іконка розширення
├── README.md             # Документація
└── .vscodeignore         # Ігноровані файли при пакуванні
```

## 🎨 Іконка

Розширення використовує білу SVG іконку `</>` на sidebar, яка добре виглядає як в світлій, так і в темній темі VS Code.

## ⌨️ Гарячі клавіші

| Комбінація | Дія |
|-----------|-----|
| `Ctrl+Shift+I` / `Cmd+Shift+I` | Відкрити вибір snippet |
| `Ctrl+Shift+P` / `Cmd+Shift+P` | Command Palette |

## 🔧 Розробка

### Запуск в режимі розробки

1. Відкрийте папку розширення в VS Code
2. Натисніть `F5` або `Run` → `Start Debugging`
3. Відкриється нове вікно з активованим розширенням

### Тестування змін

1. Відредагуйте `extension.js`
2. У вікні Extension Development Host натисніть `Ctrl+R` для перезавантаження

### Логування

Відкрийте `Help` → `Toggle Developer Tools` → `Console` для перегляду логів.

## 📝 Приклад повного налаштування

```json
{
  "codeSnippetsInserter.snippets": {
    "HTML5 Template": {
      "code": "<!DOCTYPE html>\n<html lang=\"uk\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>${1:Document}</title>\n</head>\n<body>\n    ${2}\n</body>\n</html>",
      "description": "Базовий HTML5 шаблон"
    },
    "CSS Flexbox": {
      "code": ".${1:container} {\n    display: flex;\n    justify-content: ${2:center};\n    align-items: ${3:center};\n}",
      "description": "Flexbox контейнер"
    },
    "Gulp Task": {
      "code": "function ${1:taskName}() {\n    return src('${2:src/**/*}')\n        .pipe(${3:plugin}())\n        .pipe(dest('${4:dist}'));\n}\n\nexports.${1:taskName} = ${1:taskName};",
      "description": "Gulp задача"
    },
    "Telegram Bot Send": {
      "code": "$message = \"${1:message}\";\n$botToken = '${2:BOT_TOKEN}';\n$chatId = '${3:CHAT_ID}';\n\n$url = \"https://api.telegram.org/bot\" . $botToken . \"/sendMessage\";\n$data = [\n    'chat_id' => $chatId,\n    'text' => $message,\n    'parse_mode' => 'HTML'\n];\n\nfile_get_contents($url . '?' . http_build_query($data));",
      "description": "Відправка в Telegram Bot"
    }
  }
}
```

---

## ❓ Вирішення проблем

### 🔴 Проблема: Не бачу розширення в списку Extensions

**Симптом:** Після встановлення розширення не відображається в `Cmd+Shift+X` → Extensions

**Рішення:**

1. **Перевірте, що VSIX встановлено:**
   ```bash
   code --list-extensions | grep code-snippets-inserter
   ```
   Має бути: `wpdews.code-snippets-inserter`

2. **Перезавантажте VS Code:**
   - `Cmd+Shift+P` → **Developer: Reload Window**
   - Або повністю закрийте та відкрийте VS Code

3. **Перевірте логи встановлення:**
   - `View` → `Output` → оберіть "Extensions"
   - Шукайте помилки встановлення

4. **Встановіть заново:**
   ```bash
   # Видаліть старе
   code --uninstall-extension wpdews.code-snippets-inserter
   # Встановіть знову
   code --install-extension code-snippets-inserter-1.0.0.vsix
   ```

---

### 🔴 Проблема: Не бачу іконку `</>` на Activity Bar

**Симптом:** Розширення встановлено, але іконка не з'являється на лівій панелі

**Рішення:**

1. **Перевірте активацію розширення:**
   - `View` → `Output` → оберіть "Log (Extension Host)"
   - Має бути: `"Code Snippets Inserter активовано!"`

2. **Якщо немає активації:**
   - Відкрийте будь-який файл в редакторі
   - Виконайте команду: `Cmd+Shift+P` → **Code Snippets: Вставити шматок коду**
   - Це має активувати розширення

3. **Перевірте видимість Activity Bar:**
   - `View` → `Appearance` → `Activity Bar` (має бути ✓)

4. **Іконка прихована:**
   - Правий клік на Activity Bar → `Code Snippets` має бути в списку
   - Якщо є, але не відображається - перетягніть її вгору

---

### 🔴 Проблема: Не можу відкрити файл snippets.json

**Симптом:** Команда "Відкрити файл snippets.json" не працює

**Рішення:**

1. **Знайдіть файл вручну:**
   - Mac: `~/Library/Application Support/Code/User/globalStorage/wpdews.code-snippets-inserter/snippets.json`
   - Windows: `%APPDATA%\Code\User\globalStorage\wpdews.code-snippets-inserter\snippets.json`
   - Linux: `~/.config/Code/User/globalStorage/wpdews.code-snippets-inserter/snippets.json`

2. **Використайте команду для відкриття папки:**
   - `Cmd+Shift+P` → **Code Snippets: Відкрити папку зі snippets**

3. **Якщо файла немає - він створиться автоматично:**
   - Перезавантажте VS Code
   - Виконайте команду вставки snippet (`Cmd+Shift+I`)
   - Файл буде створений автоматично

---

### 🔴 Проблема: Створив snippet, але він не з'являється в списку

**Симптом:** Додав snippet в snippets.json, але його немає у виборі

**Рішення:**

1. **Перевірте синтаксис JSON:**
   - Відкрийте snippets.json
   - Подивіться на підсвітку помилок (червоні хвилясті лінії)
   - Найчастіші помилки:
     - Відсутня кома між елементами
     - Лишня кома після останнього елемента
     - Не екрановані лапки: `"` → `\"`
     - Одинарний слеш замість подвійного: `\n` → `\\n`

2. **Приклад правильного синтаксису:**
   ```json
   {
     "Snippet 1": {
       "code": "код з \\n для нових рядків",
       "description": "опис"
     },  // ← Кома тут
     "Snippet 2": {
       "code": "інший код",
       "description": "інший опис"
     }  // ← Без коми тут (останній елемент)
   }
   ```

3. **Збережіть файл:**
   - `Cmd+S` або `Ctrl+S`
   - Зміни застосуються автоматично

4. **Перевірте в Output:**
   - `View` → `Output` → "Log (Extension Host)"
   - Шукайте помилки парсингу JSON

---

### 🔴 Проблема: Snippet вставляється як звичайний текст (без табуляції)

**Симптом:** Placeholders `${1:name}` вставляються як є, а не як інтерактивні поля

**Рішення:**

1. **Екрануйте $ у JSON:**
   ```json
   // ❌ Неправильно (якщо $ не в складі placeholder):
   "code": "price = $100"
   
   // ✅ Правильно:
   "code": "price = \\$100"
   ```

2. **Для placeholders НЕ екрануйте:**
   ```json
   // ✅ Правильно для placeholders:
   "code": "function ${1:name}(${2:params}) { ${0} }"
   ```

---

### 🔴 Проблема: Гарячі клавіші не працюють

**Симптом:** `Cmd+Shift+I` або `Ctrl+Shift+I` нічого не роблять

**Рішення:**

1. **Перевірте конфлікти клавіш:**
   - `Cmd+Shift+P` → **Preferences: Open Keyboard Shortcuts**
   - Пошук: `codeSnippetsInserter.insertSnippet`
   - Подивіться чи немає конфліктів з іншими розширеннями

2. **Призначте інші клавіші:**
   - В Keyboard Shortcuts знайдіть `codeSnippetsInserter.insertSnippet`
   - Клік → `Change Keybinding`
   - Введіть нову комбінацію (наприклад, `Cmd+Alt+S`)

3. **Перевірте фокус редактора:**
   - Гарячі клавіші працюють тільки коли курсор в редакторі
   - Клікніть в редакторі перед натисканням

---

### 🔴 Проблема: Помилка при упаковці (vsce package)

**Симптом:** `Error: Missing icon.png file`

**Рішення:**

1. **Створіть PNG іконку:**
   ```bash
   # Використайте онлайн конвертер
   open https://cloudconvert.com/svg-to-png
   # Завантажте images/icon.svg, встановіть 128x128px
   # Збережіть як images/icon.png
   ```

2. **Або тимчасово відключіть іконку:**
   ```json
   // У package.json закоментуйте:
   // "icon": "images/icon.png",
   ```

3. **Детальніше:** див. [ICON_INSTRUCTIONS.md](ICON_INSTRUCTIONS.md)

---

### 🔴 Потрібна додаткова допомога?

1. **Повна інструкція користувача:** [USER_GUIDE.md](USER_GUIDE.md)
2. **Приклади snippets:** [EXAMPLES.md](EXAMPLES.md)
3. **Історія змін:** [CHANGELOG.md](CHANGELOG.md)
4. **GitHub Issues:** створіть issue з детальним описом проблеми

---

## 🐛 Відомі проблеми

Немає відомих проблем. Якщо знайдете баг, створіть Issue на GitHub.

## 📄 Ліцензія

MIT

## 👨‍💻 Автор

wpdews

---

**Насолоджуйтесь швидкою розробкою! 🚀**
