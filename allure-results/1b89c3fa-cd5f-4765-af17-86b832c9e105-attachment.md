# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DropDown.spec.js >> Dropdown Handling
- Location: tests\DropDown.spec.js:3:5

# Error details

```
ReferenceError: Cannot access 'heros' before initialization
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation "main navigation" [ref=e4]:
    - generic [ref=e5]:
      - link "LetCode Home" [ref=e6] [cursor=pointer]:
        - /url: /
        - img "LetCode" [ref=e7]
      - generic [ref=e8]:
        - link "Work-Space" [ref=e9] [cursor=pointer]:
          - /url: /test
        - generic [ref=e10]:
          - button "Products" [ref=e11] [cursor=pointer]
          - generic:
            - link "Ortoni Report":
              - /url: /product/ortoni-report
            - link "LetXPath":
              - /url: /product/letxpath
            - link "Playwright Runner":
              - /url: /product/playwright-runner
        - generic [ref=e15]:
          - button "Grooming" [ref=e16] [cursor=pointer]
          - generic:
            - link "Test Practice":
              - /url: /test-practice
            - link "Interview Q & A":
              - /url: /interview
            - link "Playwright Quiz":
              - /url: /pw-quiz
            - link "Resume Builder":
              - /url: /resume-builder
        - link "Courses" [ref=e20] [cursor=pointer]:
          - /url: /courses
        - link "Contact" [ref=e21] [cursor=pointer]:
          - /url: /contact
      - button "Switch to dark mode" [ref=e23] [cursor=pointer]
  - main [ref=e26]:
    - generic [ref=e28]:
      - generic [ref=e30]:
        - navigation "Breadcrumb" [ref=e31]:
          - link "Workspace" [ref=e32] [cursor=pointer]:
            - /url: /test
          - generic [ref=e41]: Dropdown
        - heading "Dropdown" [level=1] [ref=e44]
      - generic [ref=e46]:
        - generic [ref=e48]:
          - generic [ref=e49]:
            - generic [ref=e50]: Select the apple using visible text
            - combobox "Select the apple using visible text" [ref=e52]:
              - option "Select Fruit" [selected]
              - option "Apple"
              - option "Mango"
              - option "Orange"
              - option "Banana"
              - option "Pine Apple"
          - generic [ref=e53]:
            - generic [ref=e54]: Select your super hero's
            - listbox "Select your super hero's" [ref=e56]:
              - option "Ant-Man" [selected] [ref=e57]
              - option "Aquaman" [selected] [ref=e58]
              - option "The Avengers" [ref=e59]
              - option "Batman" [ref=e60]
              - option "Batwoman" [ref=e61]
              - option "Black Panther" [ref=e62]
              - option "Captain America" [ref=e63]
              - option "Captain Marvel" [ref=e64]
              - option "Daredevil" [ref=e65]
              - option "Doc Savage" [selected] [ref=e66]
              - option "Doctor Strange" [ref=e67]
              - option "Elektra" [ref=e68]
              - option "Fantastic Four" [ref=e69]
              - option "Ghost Rider" [ref=e70]
              - option "Green Lantern" [ref=e71]
              - option "Guardians of the Galaxy" [ref=e72]
              - option "Hellboy" [ref=e73]
              - option "Incredible Hulk" [ref=e74]
              - option "Iron Man" [ref=e75]
              - option "Marvelman" [ref=e76]
              - option "Robin" [ref=e77]
              - option "The Shadow" [ref=e78]
              - option "Spider-Man" [ref=e79]
              - option "Supergirl" [ref=e80]
              - option "Superman" [ref=e81]
              - option "Thor" [ref=e82]
              - option "Wolverine" [ref=e83]
              - option "Wonder Woman" [ref=e84]
              - option "X-Men" [ref=e85]
            - paragraph [ref=e87]: You have selected Ant-Man, Aquaman, Doc Savage
          - generic [ref=e88]:
            - generic [ref=e89]: Select the last programming language and print all the options
            - combobox "Select the last programming language and print all the options" [ref=e91]:
              - option "JavaScript" [selected]
              - option "Java"
              - option "Python"
              - option "Swift"
              - option "C#"
          - generic [ref=e92]:
            - generic [ref=e93]: Select India using value & print the selected value
            - combobox "Select India using value & print the selected value" [ref=e95]:
              - option "Argentina" [selected]
              - option "Bolivia"
              - option "Brazil"
              - option "Chile"
              - option "Colombia"
              - option "Ecuador"
              - option "India"
              - option "Paraguay"
              - option "Peru"
              - option "Suriname"
              - option "Uruguay"
              - option "Venezuela"
        - generic [ref=e97]:
          - heading "Learning Points" [level=3] [ref=e102]
          - list [ref=e103]:
            - listitem [ref=e104]:
              - generic [ref=e108]:
                - text: selectByVisibleText()
                - link "Learn Coding Online" [ref=e109] [cursor=pointer]
            - listitem [ref=e113]:
              - generic [ref=e117]: isMultiple()
            - listitem [ref=e118]:
              - generic [ref=e122]: How to select multiple values
            - listitem [ref=e123]:
              - generic [ref=e127]: selectByIndex()
            - listitem [ref=e128]:
              - generic [ref=e132]: getOptions()
            - listitem [ref=e133]:
              - generic [ref=e137]: selectByValue()
            - listitem [ref=e138]:
              - generic [ref=e142]: getFirstSelectedOption()
          - generic [ref=e143]:
            - link "Watch Tutorial" [ref=e144] [cursor=pointer]:
              - /url: /video/dropdowns
            - generic [ref=e148]:
              - text: "Practice ID:"
              - code [ref=e149]: dropdowns
        - insertion [ref=e153]:
          - generic [ref=e156]:
            - heading "These are topics related to the article that might interest you" [level=2] [ref=e158]: Discover more
            - link "Download Reference Apps" [ref=e159] [cursor=pointer]
            - link "Learn Coding Online" [ref=e164] [cursor=pointer]
            - link "Get Career Coaching" [ref=e169] [cursor=pointer]
            - link "programming language" [ref=e174] [cursor=pointer]
            - link "Track Business News" [ref=e179] [cursor=pointer]
            - link "Get Language Courses" [ref=e184] [cursor=pointer]
            - link "Take Tech Bootcamps" [ref=e189] [cursor=pointer]
            - link "Upgrade Laptop Hardware" [ref=e194] [cursor=pointer]
      - generic [ref=e201]:
        - insertion:
          - iframe [ref=e203]:
            
  - contentinfo [ref=e204]:
    - generic [ref=e205]:
      - paragraph [ref=e206]:
        - text: © 2026 LetCode ·
        - link "Koushik Chatterjee" [ref=e207] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/ortoni/
        - text: "&"
        - link "Bollineni Yaswanth" [ref=e208] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
      - generic [ref=e209]:
        - link "GitHub" [ref=e210] [cursor=pointer]:
          - /url: https://github.com/ortoniKC
        - link "YouTube" [ref=e214] [cursor=pointer]:
          - /url: https://www.youtube.com/@letcode
        - link "LinkedIn" [ref=e218] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/ortoni/
        - link "Contact" [ref=e224] [cursor=pointer]:
          - /url: /contact
        - link "🍕 Support" [ref=e225] [cursor=pointer]:
          - /url: https://buymeacoffee.com/letcode
```

# Test source

```ts
  1  | import  {test} from 'playwright/test'
  2  | 
  3  | test ('Dropdown Handling', async ({page}) =>{
  4  |     await page.goto('https://letcode.in/dropdowns')
  5  |     const fruite = await page.locator('//select[@id="fruits"]')
  6  |     await fruite.selectOption({lable: "Orange"})
  7  |     const text = await fruite.locator('option:checked').textContent()
  8  |     console.log(text)
  9  | 
  10 |     const superhero = await page.locator ('//select[@id="superheros"]')
  11 |     await superhero.selectOption([{index: 1 }, {lable: "batman"}, {value: "ds"}])
  12 |     const heros = await superhero.locator('option:checked').allTextContents(
> 13 |     console.log(heros)
     |                 ^ ReferenceError: Cannot access 'heros' before initialization
  14 |     )
  15 | 
  16 |       await page.goto('https://www.way2automation.com/automationpracticesite2.html')
  17 |     const todo = await page.locator('//div[@id="todoZone"]')
  18 |     await todo.selectOption({index: 1})
  19 |     const text1 = await todo.locator('option:checked').textContent()
  20 |     console.log(text1)
  21 | 
  22 |     const todo1 = await page.locator ('//div[@id="todoZone"]')
  23 |     await todo1.selectOption([{index: 2 }, {value: "true"}])
  24 |     const todozone1 = await todo.locator('option:checked').allTextContents(
  25 |     console.log(todozone1)
  26 |     )
  27 | })
```