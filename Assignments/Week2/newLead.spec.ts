import {test,chromium } from "@playwright/test";
test (`New Lead Creation`,async ({page}) =>
{
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator(`#username`).fill('Demosalesmanager');
    await page.locator(`#password`).fill('crmsfa');
    await page.locator(`.decorativeSubmit`).click();
    await page.locator(`#label`).nth(0).click();
    await page.locator(`a[href="/crmsfa/control/leadsMain"]`).click(); // Need help in selecting lead tab
    await page.locator(`a[href="/crmsfa/control/createLeadForm"]`).click(); // Need help in selecting create lead tab
    await page.locator(`#createLeadForm_companyName`).fill('Company 1');
    await page.locator(`#createLeadForm_firstName`).fill('John');
    await page.locator(`#createLeadForm_lastName`).fill('Maichel');
    await page.locator(`#createLeadForm_personalTitle`).fill('Mr');
    await page.locator(`#createLeadForm_generalProfTitle`).fill('Never Fail');
    await page.locator(`#createLeadForm_annualRevenue`).fill('1000000'); 
    await page.locator(`#createLeadForm_departmentName`).fill('Computer Dept.');
    await page.locator(`#createLeadForm_primaryPhoneNumber`).fill('9966241341');
    await page.locator(`.smallSubmit`).click();
    console.log(await page.title());



    await page.waitForTimeout(4000)
}
)