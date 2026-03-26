import {test,chromium, expect}  from "@playwright/test";

test (`Radio Button Selection`, async({page}) =>
{
    
    await page.goto(`https://leafground.com/radio.xhtml`);
    let browser = 'Edge';
    await page.locator(`//label[text()='${browser}']`).nth(0).click();
    await page.waitForTimeout(1000);
    //label[text()='Chrome'])[1]/../div/div/input
    const status = await page.locator(`//label[text()= '${browser}']`).nth(0).isChecked();
    //const status = await expect(page.locator(`//label[text()= '${browser}']`).nth(0)).toBeChecked();
    console.log(`The ${browser} is selected`);
    // const defaultBrowser = await page.locator(`//Input[contains(@id,'console2')]`).isChecked();
     
    await page.locator(`//label[text()='Chennai']`).click();
    await page.locator(`//label[text()='1-20 Years']`).click();

    await page.waitForTimeout(2000);
}
)