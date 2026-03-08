import { chromium,test } from "@playwright/test";

test (`Salesforce Login`, async ({page}) => 
{
    await page.goto(`https://login.salesforce.com/?locale=in`);
//Direct use of Field Names
    // await page.locator(`[id="username"]`).fill("dilipkumar.rajendran@testleaf.com");
    // await page.locator(`[id="password"]`).fill("TestLeaf@2025");
    // await page.locator(`[id="Login"]`).click();
// Using ID & Class Field shortcuts instead of fieldnames
    // await page.locator(`#username`).fill("dilipkumar.rajendran@testleaf.com");
    // await page.locator(`#password`).fill("TestLeaf@2025");
    // await page.locator(`#Login`).click();
// Using nth Method
    await page.locator(`input`).nth(18).fill("dilipkumar.rajendran@testleaf.com");
    await page.locator(`input`).nth(20).fill("TestLeaf@2025");
    await page.locator(`input`).nth(21).click()
// Using first method

}
)