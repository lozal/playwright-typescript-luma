# 🧪 Playwright + TypeScript: Luma Automation Framework

This project is a UI test automation framework built with **Playwright** and **TypeScript**, targeting the [Magento Luma demo store](https://magento.softwaretestingboard.com/). It follows the Page Object Model (POM) structure and demonstrates best practices for modern end-to-end testing.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or newer)
- [Yarn](https://yarnpkg.com/) or npm

### Installation
```bash
git clone https://github.com/lozal/playwright-typescript-luma.git
cd playwright-typescript-luma
npm install          # or: yarn install
npx playwright install
```

---

## ✅ Running Tests

To run all tests across all supported browsers:

```bash
npx playwright test
```

To view the HTML test report after running tests:

```bash
npx playwright show-report
```

You can also run tests in a specific browser:
```bash
npx playwright test --project=chromium
```

---

## 📁 Project Structure

```
playwright-typescript-luma/
├── tests/               # Test files
├── pages/               # Page Object classes
├── utils/               # Helpers, test data, utilities
├── playwright.config.ts # Configuration for test runner
└── README.md
```

---

## 🧠 Features

- ✔️ Cross-browser testing (Chromium, Firefox, WebKit)
- ✔️ Page Object Model for better structure and reusability
- ✔️ Easy configuration and parallel execution
- ✔️ HTML reporting out of the box
- ✔️ Written in TypeScript with full type support

---

## 🧾 Example Test

```ts
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('search for hoodie', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.search('hoodie');
  const results = await home.getResults();
  expect(results).toContain('Hoodie');
});
```

---

## 📊 Test Reporting

After a test run, a detailed HTML report is generated:

```bash
npx playwright show-report
```

You can also configure other reporters (JSON, JUnit, etc.) in `playwright.config.ts`.

