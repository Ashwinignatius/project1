# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Alert..spec.js >> Alert Handlig
- Location: tests\Alert..spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//button[@class="btn btn-info"]')
    - locator resolved to <button class="btn btn-info" onclick="promptbox()">click the button to demonstrate the prompt box </button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    23 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e7]:
        - /url: http://www.automationtesting.in
      - heading [level=1] [ref=e10]: Automation Demo Site
    - navigation [ref=e11]:
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link [ref=e16]:
            - /url: Index.html
            - text: Home
        - listitem [ref=e17]:
          - link [ref=e18]:
            - /url: Register.html
            - text: Register
        - listitem [ref=e19]:
          - link [ref=e20]:
            - /url: WebTable.html
            - text: WebTable
        - listitem [ref=e21]:
          - link [ref=e22]:
            - /url: SwitchTo.html
            - text: SwitchTo
          - generic [ref=e23]: 
        - listitem [ref=e24]:
          - link [ref=e25]:
            - /url: Widgets.html
            - text: Widgets
          - generic [ref=e26]: 
        - listitem [ref=e27]:
          - link [ref=e28]:
            - /url: Interactions.html
            - text: Interactions
          - generic [ref=e29]: 
        - listitem [ref=e30]:
          - link [ref=e31]:
            - /url: SwitchTo.html
            - text: Video
          - generic [ref=e32]: 
        - listitem [ref=e33]:
          - link [ref=e34]:
            - /url: WYSIWYG.html
            - text: WYSIWYG
          - generic [ref=e35]: 
        - listitem [ref=e36]:
          - link [ref=e37]:
            - /url: "#"
            - text: More
          - generic [ref=e38]: 
        - listitem [ref=e39]:
          - link [ref=e40]:
            - /url: http://practice.automationtesting.in/
            - text: Practice Site
  - generic [ref=e44]:
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link [ref=e48]:
          - /url: "#OKTab"
          - text: Alert with OK
      - listitem [ref=e49]:
        - link [ref=e50]:
          - /url: "#CancelTab"
          - text: Alert with OK & Cancel
      - listitem [ref=e51]:
        - link [ref=e52]:
          - /url: "#Textbox"
          - text: Alert with Textbox
    - button [ref=e54] [cursor=pointer]: "click the button to display an alert box:"
  - generic [ref=e56]:
    - insertion [ref=e59]:
      - generic [ref=e62]:
        - heading [level=2] [ref=e64]: Discover more
        - link [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: Alert Box Testing
        - link [ref=e70] [cursor=pointer]:
          - generic [ref=e71]: Automation Testing Course
        - link [ref=e75] [cursor=pointer]:
          - generic [ref=e76]: File Upload Testing
        - link [ref=e80] [cursor=pointer]:
          - generic [ref=e81]: Modal Window Testing
        - link [ref=e85] [cursor=pointer]:
          - generic [ref=e86]: Automation Strategy Consulting
        - link [ref=e90] [cursor=pointer]:
          - generic [ref=e91]: Web Application Testing
        - link [ref=e95] [cursor=pointer]:
          - generic [ref=e96]: Confirm Box Testing
        - link [ref=e100] [cursor=pointer]:
          - generic [ref=e101]: Cross Browser Testing
    - insertion [ref=e107]:
      - generic [ref=e110]:
        - heading [level=2] [ref=e112]: Discover more
        - link [ref=e113] [cursor=pointer]:
          - generic [ref=e114]: Switch Broadband Providers
        - link [ref=e118] [cursor=pointer]:
          - generic [ref=e119]: ProgressBar Testing
        - link [ref=e123] [cursor=pointer]:
          - generic [ref=e124]: Software Testing Tutorials
        - link [ref=e128] [cursor=pointer]:
          - generic [ref=e129]: Compare Developer Tools
        - link [ref=e133] [cursor=pointer]:
          - generic [ref=e134]: Testing Demo Site
        - link [ref=e138] [cursor=pointer]:
          - generic [ref=e139]: Automation Testing Platform
        - link [ref=e143] [cursor=pointer]:
          - generic [ref=e144]: Discover Productivity Apps
        - link [ref=e148] [cursor=pointer]:
          - generic [ref=e149]: Web Development Testing
    - insertion [ref=e155]:
      - generic [ref=e158]:
        - heading [level=2] [ref=e160]: Discover more
        - link [ref=e161] [cursor=pointer]:
          - generic [ref=e162]: Find Acting Auditions
        - link [ref=e166] [cursor=pointer]:
          - generic [ref=e167]: Test Automation Services
        - link [ref=e171] [cursor=pointer]:
          - generic [ref=e172]: Prompt Box Testing
        - link [ref=e176] [cursor=pointer]:
          - generic [ref=e177]: Software Testing Tools
        - link [ref=e181] [cursor=pointer]:
          - generic [ref=e182]: Download Tech Manuals
        - link [ref=e186] [cursor=pointer]:
          - generic [ref=e187]: Compare Smart TVs
        - link [ref=e191] [cursor=pointer]:
          - generic [ref=e192]: Dynamic Data Handling
        - link [ref=e196] [cursor=pointer]:
          - generic [ref=e197]: UI Automation Training
    - insertion [ref=e203]:
      - generic [ref=e206]:
        - heading [level=2] [ref=e208]: Discover more
        - link [ref=e209] [cursor=pointer]:
          - generic [ref=e210]: Explore Streaming Services
        - link [ref=e214] [cursor=pointer]:
          - generic [ref=e215]: Test Case Design
        - link [ref=e219] [cursor=pointer]:
          - generic [ref=e220]: Upgrade Industrial Robotics
        - link [ref=e224] [cursor=pointer]:
          - generic [ref=e225]: Join Acting Classes
        - link [ref=e229] [cursor=pointer]:
          - generic [ref=e230]: Learn Coding Online
        - link [ref=e234] [cursor=pointer]:
          - generic [ref=e235]: Selenium Automation Guide
        - link [ref=e239] [cursor=pointer]:
          - generic [ref=e240]: Explore CMS Platforms
        - link [ref=e244] [cursor=pointer]:
          - generic [ref=e245]: Download Tech Manuals
    - contentinfo [ref=e250]:
      - generic [ref=e252]:
        - generic [ref=e253]:
          - text: "\"@ 2016\""
          - link [ref=e254]:
            - /url: "#"
            - text: Automation Testing
          - text: "\"All Rights Reserved.\""
        - generic [ref=e255]:
          - link [ref=e256]:
            - /url: https://www.facebook.com/automationtesting2016/
            - generic [ref=e257]: 
          - link [ref=e258]:
            - /url: https://twitter.com/krishnasakinala
            - generic [ref=e259]: 
          - link [ref=e260]:
            - /url: https://www.linkedin.com/nhome/?trk=hb_signin
            - generic [ref=e261]: 
          - link [ref=e262]:
            - /url: https://plus.google.com/105286300926085335367
            - generic [ref=e263]: 
          - link [ref=e264]:
            - /url: https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg
            - generic [ref=e265]: 
```

# Test source

```ts
  1  | import {test} from '@playwright/test'
  2  | 
  3  | test('Alert Handlig', async ({page}) =>{
  4  |     await page.goto('https://demo.automationtesting.in/Alerts.html')
  5  | 
  6  |     await page.once('dialog', async (dialog) =>{
  7  |         await dialog.accept()
  8  |         console.log("simple Alert:", dialog.message())
  9  |     })
  10 | 
  11 |     await page.locator('//button[@class="btn btn-danger"]').click()
  12 | 
  13 |     await page.locator('(//a[@class="analystic"])[2]').click()
  14 | 
  15 |     await page.once('dialog', async (dialog) => {
  16 |         await dialog.dismiss()
  17 |         console.log("confirmation Alert:", dialog.message())
  18 |     })
  19 | 
> 20 |     await page.locator('//button[@class="btn btn-info"]').click()
     |                                                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  21 | 
  22 |     await page.locator('(//a[@class="analystic"])[3]').click()
  23 | 
  24 |     await page.once('dialog', async(dialog) =>{
  25 |         await dialog.accept("hi")
  26 |         console.log("prompt alert:", dialog.message())
  27 |     })
  28 |     await page.locator('//button[@class="btn btn-info"]').click()
  29 | })
```