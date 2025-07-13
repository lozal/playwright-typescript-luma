# 🎭 Playwright + TypeScript: Luma UI Test Automation

This project is a UI test automation framework built with **Playwright** and **TypeScript**, targeting the [Luma demo store](https://magento.softwaretestingboard.com/).

It demonstrates best practices in modern end-to-end testing using the **Page Object Model (POM)** and Playwright’s robust testing capabilities.

---

## 📁 Project Structure

```
playwright-typescript-luma/
│   .gitignore
│   package.json
│   package-lock.json
│   playwright.config.ts
│   README.md
│
├── page-objects/                # Page Object Model classes
│   ├── advancedSearchPage.ts
│   ├── filterPanel.ts
│   └── resultsPanel.ts
│
├── tests/                       # Main test suites
│   ├── advancedSearch.spec.ts
│   ├── createAccount.spec.ts
│   └── initTests.spec.ts
│
└── tests-examples/              # Example/demo tests
    └── demo-todo-app.spec.ts
```

---

## 🚀 Getting Started

### 📦 Install dependencies

```bash
npm install
npx playwright install
```

### 🧪 Run all tests

```bash
npx playwright test
```

### 📊 View test report

```bash
npx playwright show-report
```

---

## 🧠 Features

- ✅ Built with Playwright Test + TypeScript
- ✅ Page Object Model structure
- ✅ Parallel and cross-browser testing
- ✅ HTML reports with trace viewer support
- ✅ Includes both real and sample test cases
