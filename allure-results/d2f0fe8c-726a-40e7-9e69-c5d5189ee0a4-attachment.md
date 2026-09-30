# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sample.spec.js >> validate instagram
- Location: tests\sample.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//input[@id="_R_32d9lplcldcpbn6b5ipamH1_"]')

```

# Page snapshot

```yaml
- generic [ref=e12]:
  - generic [ref=e17]:
    - generic [ref=e19]:
      - img "Instagram" [ref=e22]
      - generic [ref=e23]: See everyday moments from your close friends.
    - generic [ref=e38]:
      - generic [ref=e39]: Log in to Instagram
      - generic [ref=e50]:
        - generic [ref=e54]:
          - textbox "Mobile number, username or email address" [active] [ref=e55]
          - generic: Mobile number, username or email address
        - generic [ref=e59]:
          - textbox "Password" [ref=e60]
          - generic: Password
        - button "Log in" [disabled] [ref=e63]
        - link "Forgotten password?" [ref=e69] [cursor=pointer]:
          - /url: /accounts/password/reset/
        - button "Log in with Facebook" [ref=e75] [cursor=pointer]
        - link "Create new account" [ref=e84] [cursor=pointer]:
          - /url: /accounts/emailsignup/
        - img "Meta logo" [ref=e89]
  - separator [ref=e97]
  - contentinfo [ref=e99]:
    - generic [ref=e100]:
      - generic [ref=e102]:
        - link "Meta" [ref=e104] [cursor=pointer]:
          - /url: https://about.meta.com/
        - link "About" [ref=e107] [cursor=pointer]:
          - /url: https://about.instagram.com/
        - link "Blog" [ref=e110] [cursor=pointer]:
          - /url: https://about.instagram.com/blog/
        - link "Jobs" [ref=e113] [cursor=pointer]:
          - /url: https://about.instagram.com/about-us/careers
        - link "Help" [ref=e116] [cursor=pointer]:
          - /url: https://help.instagram.com/
        - link "API" [ref=e119] [cursor=pointer]:
          - /url: https://developers.facebook.com/docs/instagram
        - link "Privacy" [ref=e122] [cursor=pointer]:
          - /url: /legal/privacy/?hl=en-in
        - link "Terms" [ref=e125] [cursor=pointer]:
          - /url: /legal/terms/?hl=en-in
        - link "Locations" [ref=e128] [cursor=pointer]:
          - /url: /explore/locations/?hl=en-in
        - link "Popular" [ref=e131] [cursor=pointer]:
          - /url: /popular/?hl=en-in
        - link "Instagram Lite" [ref=e134] [cursor=pointer]:
          - /url: /web/lite/?hl=en-in
        - link "Meta AI" [ref=e137] [cursor=pointer]:
          - /url: https://www.meta.ai/?utm_source=foa_web_footer
        - link "Muse" [ref=e140] [cursor=pointer]:
          - /url: https://muse.ai/
        - link "Threads" [ref=e143] [cursor=pointer]:
          - /url: https://www.threads.com/
        - link "Contact uploading and non-users" [ref=e146] [cursor=pointer]:
          - /url: https://www.facebook.com/help/instagram/261704639352628
        - link "Meta Verified" [ref=e149] [cursor=pointer]:
          - /url: /accounts/meta_verified/?entrypoint=web_footer&hl=en-in
      - generic [ref=e151]:
        - generic [ref=e152] [cursor=pointer]:
          - generic [ref=e153]:
            - generic [ref=e154]: English (UK)
            - img "Down Chevron Icon" [ref=e157]
          - combobox "Switch display language" [ref=e159]:
            - option "Afrikaans"
            - option "العربية"
            - option "Čeština"
            - option "Dansk"
            - option "Deutsch"
            - option "Ελληνικά"
            - option "English"
            - option "English (UK)" [selected]
            - option "Español (España)"
            - option "Español"
            - option "فارسی"
            - option "Suomi"
            - option "Français"
            - option "עברית"
            - option "Bahasa Indonesia"
            - option "Italiano"
            - option "日本語"
            - option "한국어"
            - option "Bahasa Melayu"
            - option "Norsk"
            - option "Nederlands"
            - option "Polski"
            - option "Português (Brasil)"
            - option "Português (Portugal)"
            - option "Русский"
            - option "Svenska"
            - option "ภาษาไทย"
            - option "Filipino"
            - option "Türkçe"
            - option "中文(简体)"
            - option "中文(台灣)"
            - option "বাংলা"
            - option "ગુજરાતી"
            - option "हिन्दी"
            - option "Hrvatski"
            - option "Magyar"
            - option "ಕನ್ನಡ"
            - option "മലയാളം"
            - option "मराठी"
            - option "नेपाली"
            - option "ਪੰਜਾਬੀ"
            - option "සිංහල"
            - option "Slovenčina"
            - option "தமிழ்"
            - option "తెలుగు"
            - option "اردو"
            - option "Tiếng Việt"
            - option "中文(香港)"
            - option "Български"
            - option "Français (Canada)"
            - option "Română"
            - option "Српски"
            - option "Українська"
        - generic [ref=e160]: © 2026 Instagram from Meta
```

# Test source

```ts
  1  | import{test}from '@playwright/test'
  2  | 
  3  | test('validate instagram',async ({page}) =>{
  4  |     await page.goto('https://www.instagram.com/?hl=en-in')
> 5  |     await page.locator('//input[@id="_R_32d9lplcldcpbn6b5ipamH1_"]').fill('Mobile number,username or email address')
     |                                                                      ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  6  |     await page.locator('//input[@id="_R_32d9lplcldcpbn6b5ipamH1_"]').fill('Password')
  7  |     await page.locator('//span[text()="Log in"]').click()
  8  | })
  9  | 
  10 | 
  11 | // locator--------> x-path
  12 | 
  13 | //id
  14 | //name
  15 | //class
  16 | //atrribute and value
  17 | //text
```