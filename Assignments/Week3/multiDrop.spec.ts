import {test,chromium, expect} from "@playwright/test";

test('Multiple dropdown seelection', async({page}) =>
{
    await page.goto('https://leafground.com/select.xhtml');
    await page.selectOption(`//select[@class='ui-selectonemenu']`,{label:'Playwright'});
    const tools = page.locator(`//select[@class='ui-selectonemenu']/option`);
    const toolscount = await tools.count();
    for (let i=1;i<toolscount;i++ )
    {
        console.log(await tools.nth(i).innerText());
    }   
    await page.locator(`//label[text()='Select Country']`).click();
    await page.locator(`//li[text()='India']`).click();
    await page.waitForTimeout(300);
    // await expect(page.locator("//li[text()='Chennai']")).toHaveCount(1); --Not Working
    await page.locator(`//label[text()='Select City']`).click();
    await page.locator(`//li[text()='Chennai']`).click();
    await page.getByRole("button",{name:"Show Options"}).click();
    await page.locator(`//li[@data-item-value='Playwright']`).click();
    await page.waitForTimeout(300);
    await page.locator(`//label[text()='Select Language']`).click();
    await page.locator(`//li[text()='English']`).click();
    await page.waitForTimeout(300);
    await page.locator(`//label[text()='Select Values']`).click();
    await page.locator(`//li[text()='Two']`).click();
    // await page.waitForTimeout(4000);
}    
)