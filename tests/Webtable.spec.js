import {test,expect } from '@playwright/test'
test ('Webtable', async ({page}) => {
    await page.goto('https://qavbox.github.io/demo/webtable/')
    const rowData = await page.locator('//table[@id="table02"]//tbody//tr[1]//td').allTextContents()
    console.log(rowData)
    await expect(rowData).toContain('Tiger Nixon')
  


const columnData = await page.locator('//table[@id="table02"]//tbody//tr//td[1]').allTextContents()
console.log(columnData)
await expect(columnData).toContain('Bruno Nash')

const data = await page.locator('//table[@id="table02"]//tbody//tr[3]//td[3]').allTextContents()
console.log(data)
await expect(data).toEqual['San Franisco']
})