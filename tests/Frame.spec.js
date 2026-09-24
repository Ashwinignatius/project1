import{test} from 'playwright/test'

test('Frame handling',async({ page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html')
    const singleFrame = await page.frameLocator('//iframe[@id="singleframe"]')
    await singleFrame.locator('//input[@type="text"]').fill("hi buddy")

    await  page.locator('(//a[@class="analystic"])[2]').click()

    const outerframe = await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
    const innerframe = await page.frameLocator('//iframe[@src="SingleFrame.html"]')
    await page.innerframe.locator('//input[@type="text"]').fill("hello")

})
