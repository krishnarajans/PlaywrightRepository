import  {test,  } from "@playwright/test";
test('Checkbox Selection', async({page}) =>
{
    await page.goto('https://leafground.com/checkbox.xhtml');
    await page.locator(`//span[text()='Basic']`).click();
    await page.locator(`//span[text()='Ajax']`).click();
    const popUp1 = await page.locator(`//span[text()='Checked']/parent::div`).innerText();
    console.log(`The notification is ${popUp1}`);
    await page.locator(`//label[text()='Java']`).click();
    await page.locator(`//label[text()='Javascript']`).click();
    await page.locator(`//div[contains(@data-iconstates,'ui-icon-check')]`).click();// CHeckbox Checked Once
    // await page.waitForTimeout(500);
    // await page.locator(`//div[contains(@data-iconstates,'ui-icon-check')]`).click();// CHeckbox Checked twice
    // await page.waitForTimeout(500);
    // await page.locator(`//div[contains(@data-iconstates,'ui-icon-check')]`).click();// CHeckbox UnChecked
    // await page.waitForTimeout(500);
    const popUp2 = await page.locator(`//p[contains(text(),'State')]`).innerText();
    console.log(popUp2)
    await page.waitForTimeout(2000);

    if (popUp2 === 'State = 1' || popUp2 === 'State = 2' )
    {
      console.log(`Tri State Checkbox is checked ${popUp2}`);  
    } else
    {
      console.log(`Tri State Checkbox is unchecked`);  
    }
    await page.locator(`//div[@class='ui-toggleswitch ui-widget']`).click();
    const popUp3 = await page.locator(`//span[text()='Checked']/parent::div`).innerText();
    console.log(`The Toggle switch is ${popUp3}`);
    const checkboxStatus = await page.locator(`//span[@class='ui-chkbox-label ui-state-disabled']`).innerText();
    console.log(`The Checkbox is ${checkboxStatus}`);
    await page.locator(`//ul[@data-label='Cities']`).click();
    await page.locator(`//li[@data-item-value='Paris']/div[@class='ui-chkbox ui-widget']`).click();
    await page.locator(`//li[@data-item-value='Rome']/div[@class='ui-chkbox ui-widget']`).click();
    const selected = await page.locator(`//ul[@data-label='Cities']`).innerText();
    console.log(selected);
    await page.waitForTimeout(2000);
    await page.close();
}
)