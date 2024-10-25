import { expect, Page} from "@playwright/test"

export class AdvancedSearchPage {

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async searchByProductName(productName: string){
        await this.page.getByLabel('Product Name').click();
        await this.page.getByLabel('Product Name').fill(productName);
        await this.page.locator('#form-validate').getByRole('button', { name: 'Search' }).click();
    }
    
    async searchBySku(sku: string){
        await this.page.getByLabel('SKU').click();
        await this.page.getByLabel('SKU').fill(sku);
        await this.page.locator('#form-validate').getByRole('button', { name: 'Search' }).click();
    }

    async searchByDescription(description: string){
        await this.page.locator('#description').click();
        await this.page.locator('#description').fill(description);
        await this.page.locator('#form-validate').getByRole('button', { name: 'Search' }).click();
    }

    async searchByShortDescription(shortDescription: string){
        await this.page.locator('#short_description').click();
        await this.page.locator('#short_description').fill(shortDescription);
        await this.page.locator('#form-validate').getByRole('button', { name: 'Search' }).click();
    }

    async searchByPriceRange(from: string, to: string){
        await this.page.locator('#price').click();
        await this.page.locator('#price').fill(from);
        await this.page.locator('#price_to').click();
        await this.page.locator('#price_to').fill(to);
        await this.page.locator('#form-validate').getByRole('button', { name: 'Search' }).click();
    }
}