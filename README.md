# 🌐 CRM System — Web App

A **live, fully functional CRM web application** built with vanilla HTML, CSS and JavaScript — no frameworks, no dependencies, just clean code.

🔗 **[Live Demo →](https://viveprajapati12.github.io/CRM-Web-App/)**

---

## ✨ Features

- ➕ Add customers with real-time form validation
- 🔍 Search by name or email — results update as you type
- 🏷️ Filter by plan — Basic / Premium / Enterprise
- 🗑️ Delete customers with one click
- 📊 Live stats dashboard — updates instantly
- 📱 Responsive — works on mobile too

---

## 🛠️ Built With

| Technology | Usage |
|---|---|
| HTML5 | Page structure & semantic markup |
| CSS3 | Dark theme, grid layout, animations |
| JavaScript (ES6+) | All logic — add, search, filter, delete |
| Google Fonts | Syne + DM Sans typography |
| GitHub Pages | Free hosting & deployment |

Zero frameworks. Zero libraries. Zero dependencies.

---

## 📁 Project Structure

```
CRM-Web-App/
├── index.html   # Structure — all UI elements
├── style.css    # Design — dark theme, layout, responsive
└── script.js    # Logic — customer data, search, filter, stats
```

---

## 🚀 Run Locally

No build step needed — just open in browser.

```bash
# Clone the repo
git clone https://github.com/viveprajapati12/CRM-Web-App.git

# Open in browser
cd CRM-Web-App
open index.html
```

Or just visit the **[Live Demo](https://viveprajapati12.github.io/CRM-Web-App/)** directly.

---

## 💡 How the Logic Works

This project follows the same structure as my [Java CRM System](https://github.com/viveprajapati12/Java-CRM-System) — intentionally, to understand the translation between languages.

```javascript
// Add customer — same as Java's customers.add(c)
customers.push({ id: nextId++, name, email, phone, plan });

// Search — same as Java's .toLowerCase().contains()
customers.filter(c => c.name.toLowerCase().includes(query))

// Delete — same as Java's customers.remove(c)
customers = customers.filter(x => x.id !== id);
```

Same logic, different syntax.

---

## 🔮 What I'd Add Next

- [ ] LocalStorage — data persists after page refresh
- [ ] Edit customer details
- [ ] Export to CSV
- [ ] Backend with Node.js + MongoDB

---

## 👨‍💻 Author

**Vivek Prajapati**
B.Tech ECE | Building things with Java & JavaScript

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://linkedin.com/in/vivek-prajapati-bba6802a5)
[![LeetCode](https://img.shields.io/badge/LeetCode-Profile-orange?style=flat&logo=leetcode)](https://leetcode.com/u/prajapativivek/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=flat&logo=github)](https://github.com/viveprajapati12)

---

> *"Built the Java version first to understand the logic — then translated it to the web."*