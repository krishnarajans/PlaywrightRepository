import { chromium,test } from "@playwright/test";
test (`Browser launch`, async () => 
{
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.amazon.in/');
    
    //page.url() -> url:This is a string
    //await page.title() -> title:This is a promise
    await page.waitForTimeout(3000)

}
)