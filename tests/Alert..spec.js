import {test} from '@playwright/test'

test('Alert Handlig', async ({page}) =>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')

    await page.once('dialog', async (dialog) =>{
        await dialog.accept()
        console.log("simple Alert:", dialog.message())
    })

    await page.locator('//button[@class="btn btn-danger"]').click()

    await page.locator('(//a[@class="analystic"])[2]').click()

    await page.once('dialog', async (dialog) => {
        await dialog.dismiss()
        console.log("confirmation Alert:", dialog.message())
    })

    await page.locator('//button[@class="btn btn-info"]').click()

    await page.locator('(//a[@class="analystic"])[3]').click()

    await page.once('dialog', async(dialog) =>{
        await dialog.accept("hi")
        console.log("prompt alert:", dialog.message())
    })
    await page.locator('//button[@class="btn btn-info"]').click()
})