import { test,chromium } from "@playwright/test";

test(`Alert & Frame Interactions`, async({page})=>
{
    await page.goto(`https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm`);
    page.on("dialog",async(alert)=>
    {
        const alertType = alert.type();
        if (alertType === 'confirm')
         {
            await alert.accept();
         } else
         {
            await alert.dismiss();
         }
        console.log(alert.message());
     
    })
    // await page.locator(`//span[@class='fast-cmp-home-refuse top-refuse-btn']/button`).click(); 
    let tempframe = page.frameLocator(`//iframe[@id='iframeResult']`)
    await tempframe.locator(`//button[@onclick='myFunction()']`).click();
    const msg = await tempframe.locator(`//p[@id='demo']`).innerText();
    console.log(msg);
})