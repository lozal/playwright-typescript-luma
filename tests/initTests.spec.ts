import { test, expect } from '@playwright/test';
import { FilterPanel } from '../page-objects/filterPanel';
import { ResultsPanel } from '../page-objects/resultsPanel';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

[
  { category: 'Women', item: 'Hoodies & Sweatshirts', color: 'Red' },
  { category: ' Men', item: 'Hoodies & Sweatshirts', color: 'Black' },
  { category: ' Men', item: 'Hoodies & Sweatshirts', color: 'Blue' },
  { category: 'Women', item: 'Jackets', color: 'Red' },
  { category: ' Men', item: 'Jackets', color: 'Black' },
  { category: 'Women', item: 'Jackets', color: 'Blue' },
].forEach(({ category, item, color }) => {
  test(`verifying ${item} with ${color}`, async ({ page }) => {    
    // The test checks the selection of items by color and verifies the presence of the color option for the item
    const filterPanel = new FilterPanel(page);
    const resultsPanel = new ResultsPanel(page);
    // Select category
    await page.getByRole('menuitem', { name: category }).click();
    // Select item type
    await page.getByRole('link', { name: item }).click();
    // Select items per page limit
    await resultsPanel.selectItemsPerPageLimit('36');
     // Select color
    await filterPanel.selectColor(color);
    // Get item amount with selected color available
    const itemsAmount = await page.locator("//div[@class='page-wrapper']//div[2]//p[1]//span[1]").textContent();
    const itemsNum = Number(itemsAmount);
    // Verify each item found has selected color
    await expect(page.getByLabel(color)).toHaveCount(itemsNum);
    await page.getByRole('link', { name: 'Clear All' }).click();
  });
});