# Code Snippets Inserter 📝

> Quick code snippet insertion for VS Code. Store your snippets in a separate JSON file.
> 
> Швидка вставка готових шматків коду для VS Code. Зберігайте snippets в окремому JSON файлі.
> 
> Быстрая вставка готовых фрагментов кода для VS Code. Храните сниппеты в отдельном JSON файле.

---

## ✨ Features / Особливості / Возможности

🇬🇧 **English:**
- 🚀 **Quick insertion** - insert code snippets in seconds
- 📁 **Separate storage** - snippets stored in dedicated `snippets.json` file
- 🎯 **Sidebar panel** - easy access to all snippets
- ⌨️ **Hotkeys** - `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Shift+I` (Mac)
- 💡 **Placeholders support** - use `${1:placeholder}` for tab stops
- 🎨 **Context menu** - insert via right-click in editor
- 🔄 **Auto-reload** - changes in snippets.json apply immediately
- 🌐 **HTML Generator** - visual tool for creating snippets
- 🌍 **Multilingual** - supports English, Ukrainian, Russian

🇺🇦 **Українська:**
- 🚀 **Швидка вставка** - вставляйте код за секунди
- 📁 **Окреме зберігання** - snippets в окремому `snippets.json` файлі
- 🎯 **Панель в Sidebar** - зручний доступ до всіх snippets
- ⌨️ **Гарячі клавіші** - `Ctrl+Shift+I` (Windows/Linux) або `Cmd+Shift+I` (Mac)
- 💡 **Підтримка placeholders** - використовуйте `${1:placeholder}` для табуляції
- 🎨 **Контекстне меню** - вставка через правий клік
- 🔄 **Автооновлення** - зміни застосовуються одразу
- 🌐 **HTML Генератор** - візуальний інструмент для створення snippets
- 🌍 **Багатомовність** - підтримка англійської, української, російської

🇷🇺 **Русский:**
- 🚀 **Быстрая вставка** - вставляйте код за секунды
- 📁 **Отдельное хранение** - сниппеты в отдельном `snippets.json` файле
- 🎯 **Панель в Sidebar** - удобный доступ ко всем сниппетам
- ⌨️ **Горячие клавиши** - `Ctrl+Shift+I` (Windows/Linux) или `Cmd+Shift+I` (Mac)
- 💡 **Поддержка placeholders** - используйте `${1:placeholder}` для табуляции
- 🎨 **Контекстное меню** - вставка через правый клик
- 🔄 **Автообновление** - изменения применяются сразу
- 🌐 **HTML Генератор** - визуальный инструмент для создания сниппетов
- 🌍 **Многоязычность** - поддержка английского, украинского, русского

---

## 🚀 Quick Start / Швидкий старт

### 🇬🇧 English

**Install & Use:**
1. Install extension from marketplace
2. Press `Cmd+Shift+I` (Mac) or `Ctrl+Shift+I` (Win/Linux)
3. Select snippet or create new one
4. Edit snippets: **Command Palette** → `Code Snippets: Open snippets.json`

**Create Snippet with HTML Generator:**
1. **Command Palette** → `Code Snippets: Open snippets.json`
2. Open `snippet-generator.html` in browser (located in extension folder)
3. Fill in name, code, and description
4. Click **Generate JSON** → **Copy**
5. Paste into `snippets.json`
6. Save file - snippet ready to use!

### 🇺🇦 Українська

**Встановлення та використання:**
1. Встановіть розширення з marketplace
2. Натисніть `Cmd+Shift+I` (Mac) або `Ctrl+Shift+I` (Win/Linux)
3. Оберіть snippet або створіть новий
4. Редагувати snippets: **Command Palette** → `Code Snippets: Відкрити snippets.json`

**Створення Snippet через HTML Генератор:**
1. **Command Palette** → `Code Snippets: Відкрити snippets.json`
2. Відкрийте `snippet-generator.html` в браузері (знаходиться в папці розширення)
3. Заповніть назву, код та опис
4. Натисніть **Згенерувати JSON** → **Копіювати**
5. Вставте в `snippets.json`
6. Збережіть файл - snippet готовий!

### 🇷🇺 Русский

**Установка и использование:**
1. Установите расширение из marketplace
2. Нажмите `Cmd+Shift+I` (Mac) или `Ctrl+Shift+I` (Win/Linux)
3. Выберите сниппет или создайте новый
4. Редактировать сниппеты: **Command Palette** → `Code Snippets: Открыть snippets.json`

**Создание сниппета через HTML Генератор:**
1. **Command Palette** → `Code Snippets: Открыть snippets.json`
2. Откройте `snippet-generator.html` в браузере (находится в папке расширения)
3. Заполните название, код и описание
4. Нажмите **Сгенерировать JSON** → **Копировать**
5. Вставьте в `snippets.json`
6. Сохраните файл - сниппет готов!

---

## 📝 Snippet Format / Формат Snippet

\`\`\`json
{
  "HTML5 Template": {
    "code": "<!DOCTYPE html>\\\\n<html lang=\\"uk\\">\\\\n<head>\\\\n    <meta charset=\\"UTF-8\\">\\\\n    <title>\${1:Document}</title>\\\\n</head>\\\\n<body>\\\\n    \${2:content}\\\\n</body>\\\\n</html>",
    "description": "Basic HTML5 template"
  }
}
\`\`\`

**Key points / Ключові моменти / Ключевые моменты:**
- `\\\\n` - new line / новий рядок / новая строка
- `\\\\t` - tab / табуляція / табуляция
- `\\\\$` - dollar sign for PHP variables / знак долара для PHP змінних / знак доллара для PHP переменных
- `\${1:text}` - first tab stop / перша позиція табуляції / первая позиция табуляции
- `\${0}` - final cursor position / фінальна позиція курсора / финальная позиция курсора

---

## 🛠️ Commands / Команди / Команды

| Command / Команда | Hotkey / Гарячі клавіші / Горячие клавиши |
|---|---|
| Insert Snippet / Вставити Snippet / Вставить сниппет | `Cmd+Shift+I` / `Ctrl+Shift+I` |
| Open snippets.json / Відкрити / Открыть | Command Palette |
| Open snippets folder / Відкрити папку / Открыть папку | Command Palette |

---

## 📦 Storage Location / Розташування файлів / Расположение файлов

**macOS:** 
\`\`\`
~/Library/Application Support/Code/User/globalStorage/wpdews.code-snippets-inserter/
\`\`\`

**Windows:**
\`\`\`
%APPDATA%\\Code\\User\\globalStorage\\wpdews.code-snippets-inserter\\
\`\`\`

**Linux:**
\`\`\`
~/.config/Code/User/globalStorage/wpdews.code-snippets-inserter/
\`\`\`

---

## 🌐 HTML Snippet Generator

🇬🇧 Visual tool for creating snippets with live preview:
- Dark theme matching tailwindcss.com design
- Automatic escaping of special characters
- Example templates (HTML, PHP, React, Vue)
- Copy-paste ready JSON output
- Placeholder syntax helper

🇺🇦 Візуальний інструмент для створення snippets з попереднім переглядом:
- Темна тема в стилі tailwindcss.com
- Автоматичне екранування спецсимволів
- Приклади шаблонів (HTML, PHP, React, Vue)
- Готовий до вставки JSON
- Підказки по синтаксису placeholders

🇷🇺 Визуальный инструмент для создания сниппетов с предпросмотром:
- Темная тема в стиле tailwindcss.com
- Автоматическое экранирование спецсимволов
- Примеры шаблонов (HTML, PHP, React, Vue)
- Готовый к вставке JSON
- Подсказки по синтаксису placeholders

---

## 📖 Documentation / Документація / Документация

For developers / Для розробників / Для разработчиков: **[READMEDEV.md](READMEDEV.md)**

---

## 🐛 Issues / Проблеми / Проблемы

Found a bug? / Знайшли помилку? / Нашли ошибку?
- 🇬🇧 **Report:** [GitHub Issues](https://github.com/wpdew/code-snippets-inserter/issues)
- 🇺🇦 **Повідомити:** [GitHub Issues](https://github.com/wpdew/code-snippets-inserter/issues)
- 🇷🇺 **Сообщить:** [GitHub Issues](https://github.com/wpdew/code-snippets-inserter/issues)

---

## 📄 License / Ліцензія / Лицензия

MIT License - see [LICENSE](LICENSE) file

---

## 🙏 Credits / Подяки / Благодарности

Created with ❤️ by wpdew

**Enjoy coding! / Приємного кодування! / Приятного кодинга!** 🚀
