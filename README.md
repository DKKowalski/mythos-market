# Mythos Market – Node.js Backend Project

A simple Node.js HTTP server project that dynamically serves a list of Greek & Norse mythology-inspired items (represented with fun emojis ⚡🍯🍎). Clicking an item displays its detailed page. Built as part of a backend refresh journey.

---

## 🚀 Features

* Custom Node.js HTTP server (no Express)
* Dynamic routing using the modern `URL` API
* Template-based HTML rendering using `.replace()`
* Sync & async file reading using Node's `fs`
* Overview page with all items
* Individual product detail pages
* API endpoint returning raw JSON data
* Custom 404 page

---

## 🛠 Tech Stack

* **Node.js** (native `http` module)
* **HTML templates**
* **JSON data file**
* **Vanilla JS utilities**

---

## 📁 Project Structure

```
mythos-market/
│
├── data/
│   └── data.json
│
├── pages/
│   ├── overview.html
│   ├── products.html
│   ├── 404.html
│   └── partials/
│       └── product-partial.html
│
├── utils/
│   └── replaceTemplate.js
│
├── index.js
├── package.json
└── README.md
```

---

## ▶️ Running Locally

```bash
git clone <your-repo-url>
cd mythos-market
npm install
node index.js
```

Server will start on:

```
http://localhost:9090
```

(unless PORT is specified)

---

## 🌍 Live Demo

**Render Deployment:** <your-live-link>

---

## ✨ What I Learned

* Revisited low-level Node.js server creation
* Worked with both synchronous and asynchronous `fs` operations
* Replaced deprecated `url.parse()` with the modern `URL` class
* Built a mini templating mechanism using string replacement
* Prepared app for cloud deployment by using `process.env.PORT` and binding to `0.0.0.0`

---

## 📌 Next Steps

* Refactor server using **Express.js**
* Add route controllers
* Add middleware
* Add static file support
* Add better templating system (EJS or Handlebars)
