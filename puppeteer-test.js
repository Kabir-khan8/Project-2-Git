const puppeteer = require('puppeteer');
const browser = await puppeteer.launch()
const page = await browser.newPage()
await page.goto('https://github-project-2.herokuapp.com/')

await page.setViewport({ width: 1536, height: 763 })

await page.waitForSelector('#content')
await page.click('#content')

await page.waitForSelector('.app > .create-todo > #new-todo-form > .options > label:nth-child(2)')
await page.click('.app > .create-todo > #new-todo-form > .options > label:nth-child(2)')

await page.waitForSelector('#content')
await page.click('#content')

await page.waitForSelector('.app > .create-todo > #new-todo-form > .options > label:nth-child(1)')
await page.click('.app > .create-todo > #new-todo-form > .options > label:nth-child(1)')

await page.waitForSelector('#content')
await page.click('#content')

await page.waitForSelector('body > .app > .create-todo > #new-todo-form > input:nth-child(5)')
await page.click('body > .app > .create-todo > #new-todo-form > input:nth-child(5)')

await page.waitForSelector('.todo-list > #todo-list > .todo-item:nth-child(1) > .actions > .edit')
await page.click('.todo-list > #todo-list > .todo-item:nth-child(1) > .actions > .edit')

await page.waitForSelector('.app > .todo-list > #todo-list > .todo-item:nth-child(1) > .todo-content')
await page.click('.app > .todo-list > #todo-list > .todo-item:nth-child(1) > .todo-content')

await page.waitForSelector('.todo-list > #todo-list > .todo-item:nth-child(1) > .actions > .edit')
await page.click('.todo-list > #todo-list > .todo-item:nth-child(1) > .actions > .edit')

await page.waitForSelector('html')
await page.click('html')

await page.waitForSelector('.todo-list > #todo-list > .todo-item:nth-child(3) > .actions > .delete')
await page.click('.todo-list > #todo-list > .todo-item:nth-child(3) > .actions > .delete')

await page.waitForSelector('.todo-list > #todo-list > .todo-item:nth-child(2) > .actions > .delete')
await page.click('.todo-list > #todo-list > .todo-item:nth-child(2) > .actions > .delete')

await browser.close()