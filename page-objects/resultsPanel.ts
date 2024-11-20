import { expect, Page} from "@playwright/test"

export class ResultsPanel {

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async selectItemsPerPageLimit(itemsPerPage: string){
        const dropDownList = this.page.locator('#limiter').nth(1);
        await dropDownList.selectOption({ value: itemsPerPage });
        await expect(dropDownList).toHaveValue(itemsPerPage);
    }
    
}