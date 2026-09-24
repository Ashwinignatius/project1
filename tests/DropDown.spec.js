import  {test} from 'playwright/test'

test ('Dropdown Handling', async ({page}) =>{
    await page.goto('https://letcode.in/dropdowns')
    const fruite = await page.locator('//select[@id="fruits"]')
    await fruite.selectOption({lable: "Orange"})
    const text = await fruite.locator('option:checked').textContent()
    console.log(text)

    const superhero = await page.locator ('//select[@id="superheros"]')
    await superhero.selectOption([{index: 1 }, {lable: "batman"}, {value: "ds"}])
    const heros = await superhero.locator('option:checked').allTextContents(
    console.log(heros)
    )

      await page.goto('https://www.way2automation.com/automationpracticesite2.html')
    const todo = await page.locator('//div[@id="todoZone"]')
    await todo.selectOption({index: 1})
    const text = await todo.locator('option:checked').textContent()
    console.log(text)

    const todo = await page.locator ('//div[@id="todoZone"]')
    await todo.selectOption([{index: 2 }, {value: "true"}])
    const todoZone = await todo.locator('option:checked').allTextContents(
    console.log(heros)
    )
})