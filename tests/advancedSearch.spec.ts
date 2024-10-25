import { test, expect, type Page } from '@playwright/test';
import { AdvancedSearchPage } from '../page-objects/advancedSearchPage';

test.beforeEach(async ({ page }) => {
    await page.goto('catalogsearch/advanced/');

  });

test.describe('Advanced Search - Positive', () => {

    const productName = 'Aero Daily Fitness Tee';
    const sku = 'MS01';
    const description = 'tee';
    
    
    test('search items by product name', async ({ page }) => {
        const advancedSearchPage = new AdvancedSearchPage(page);
        await advancedSearchPage.searchByProductName(productName);
        await expect(page.getByText('were found using the following search criteria')).toBeVisible();
    });
  
    test('search items by SKU', async ({ page }) => {
        const advancedSearchPage = new AdvancedSearchPage(page);
        await advancedSearchPage.searchBySku(sku);
        await expect(page.getByText('were found using the following search criteria')).toBeVisible();
    });
     
    test('search items by description', async ({ page }) => {
        const advancedSearchPage = new AdvancedSearchPage(page);
        await advancedSearchPage.searchByDescription(description);
        await expect(page.getByText('were found using the following search criteria')).toBeVisible();
    });

    test('search items by price range', async ({ page }) => {
        const advancedSearchPage = new AdvancedSearchPage(page);
        await advancedSearchPage.searchByPriceRange('20', '45');
        await expect(page.getByText('were found using the following search criteria')).toBeVisible();
    });

});

test.describe('Advanced Search - Negative', () => {

    const productName = 'Aero_Daily_Fitness_Tee';
    const sku = 'MS0101';
    const description = 'teee';
        
    test('search items by incorrect product name', async ({ page }) => {
        const advancedSearchPage = new AdvancedSearchPage(page);
        await advancedSearchPage.searchByProductName(productName);
        await expect(page.getByText("We can't find any items matching these search criteria.")).toBeVisible();
    });

    test('search items by incorrect SKU', async ({ page }) => {
        const advancedSearchPage = new AdvancedSearchPage(page);
        await advancedSearchPage.searchBySku(sku);
        await expect(page.getByText("We can't find any items matching these search criteria.")).toBeVisible();
    });

    test('search items by incorrect description', async ({ page }) => {
        const advancedSearchPage = new AdvancedSearchPage(page);
        await advancedSearchPage.searchByDescription(description);
        await expect(page.getByText("We can't find any items matching these search criteria.")).toBeVisible();
    });

    test('search items by incorrect price range', async ({ page }) => {
        const advancedSearchPage = new AdvancedSearchPage(page);
        await advancedSearchPage.searchByPriceRange('45', '20');
        await expect(page.locator('#price-error')).toBeVisible();
    });
});