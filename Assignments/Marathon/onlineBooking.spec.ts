import {test,chromium } from "@playwright/test";
test('TicketBooking', async({page}) =>
{
    await page.goto('https://www.pvrcinemas.com/');
    await page.locator(`//div[@class='cities-names']/h6[text()='Chennai']`).click();
    await page.locator(`//span[text()='GOAT']`).nth(0).click();
    await page.waitForTimeout(1000);
    await page.locator(`//span[text()='Tomorrow']`).click();
    await page.locator(`//h5[text()='04:20 PM']`).click();
    await page.waitForTimeout(2000);
    await page.locator(`//button[text()='Accept']`).click();
    await page.locator(`//span[@id='PE.PRIME|F:14']`).click();
    await page.locator(`//span[@id='PE.PRIME|F:15']`).click();
    const seatprice = await page.locator(`//div[@class='grand-prices']`).innerText();
    await page.waitForTimeout(200);
    console.log(seatprice);

    await page.locator(`//button[contains(@class,'proceeded')]`).click();
    await page.waitForTimeout(1000);

    const finalprice = await page.locator(`//div[@class='grand-tota col-md-3']//span`).innerText();
    await page.waitForTimeout(200);
    console.log(finalprice);
    if (seatprice.trim() === finalprice.trim())
    {
        console.log(`The Price to be paid is ${finalprice}`);
        
    } else
    {
        console.log(`The Seat price is ${seatprice} and the final price is ${finalprice}`);
    }    


    await page.waitForTimeout(2000);
}
)