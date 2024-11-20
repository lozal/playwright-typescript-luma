import { Page} from "@playwright/test"

export class FilterPanel {

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async selectColor(color: string){
        await this.page.getByRole('tab', { name: 'Color ' }).click();
        await this.page.getByRole('link', { name: color }).locator('div').click();
    }
    
}