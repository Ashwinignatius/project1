import{test}from '@playwright/test'

test('validate instagram',async ({page}) =>{
    await page.goto('https://www.instagram.com/?hl=en-in')
    await page.locator('//input[@id="_R_32d9lplcldcpbn6b5ipamH1_"]').fill('Mobile number,username or email address')
    await page.locator('//input[@id="_R_32d9lplcldcpbn6b5ipamH1_"]').fill('Password')
    await page.locator('//span[text()="Log in"]').click()
})


// locator--------> x-path

//id
//name
//class
//atrribute and value
//text