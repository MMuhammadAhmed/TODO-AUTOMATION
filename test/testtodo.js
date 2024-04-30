const { Builder, By, until } = require('selenium-webdriver');
const { describe, before, after, it } = require('mocha');

describe('To-do List Automation', function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function () {
    await driver.quit();
  });

  it('SHOULD LOGIN', async function () {
    await driver.get('https://ahmed-todo.netlify.app/login.html');
    await driver.findElement(By.css('#loginEmail')).sendKeys('ahmed829b@gmail.com');
    await driver.findElement(By.css('#loginPassword')).sendKeys('Mahmed3222');
    await driver.findElement(By.css('#loginBtn')).click();
    await driver.wait(until.urlIs('https://ahmed-todo.netlify.app/index.html'), 20000);
  });

  it('SHOULD ADD A TASK', async function () {
    await driver.get('https://ahmed-todo.netlify.app/index.html');
    await driver.findElement(By.css('#new-task')).sendKeys('GO TO COLLEGE');
    await driver.findElement(By.css('#addBtn')).click();
  });

  it('SHOULD CLICK ON A TASK AND MARK IT AS COMPLETE', async function () {
    await driver.get('https://ahmed-todo.netlify.app/index.html');
    await driver.wait(until.elementsLocated(By.css('.task-text')), 10000);
    const taskElements = await driver.findElements(By.css('.task-text'));
    if (taskElements.length > 0) {
      const firstTaskElement = taskElements[0];
      await firstTaskElement.click();
    } else {
      throw new Error('No tasks found');
    }
  });

  it('SHOULD DELETE A TASK', async function () {
    await driver.get('https://ahmed-todo.netlify.app/index.html');
    await driver.wait(until.elementsLocated(By.css('.task-text')), 10000);
    const deleteButton = await driver.findElement(By.css('#delbutton'));
    await deleteButton.click();
  });

  it('SHOULD LOGOUT', async function () {
    await driver.get('https://ahmed-todo.netlify.app/index.html');
    await driver.findElement(By.css('#logout-btn')).click();
  });
});


// const { Builder } = require('selenium-webdriver');

// describe('To - do List Automation', function () {
//   let driver;

//   before(async function () {
//     driver = await new Builder().forBrowser('chrome').build();
//   });

//   after(async function () {
//     await driver.quit();
//   });

//   it('SHOULD LOGIN', async function () {
//     await driver.get('https://ahmed-todo.netlify.app/login.html');
//     await driver.findElement(By.css('#loginEmail')).sendKeys('ahmed829b@gmail.com');
//     await driver.findElement(By.css('#loginPassword')).sendKeys('Mahmed3222');
//     await driver.findElement(By.css('#loginBtn')).click();
//     await driver.wait(until.urlIs('https://ahmed-todo.netlify.app/index.html'), 20000);
//   });

//   it('SHOULD ADD A TASK', async function () {
//     await driver.findElement(By.css('#new-task')).sendKeys('GO TO COLLAGE');
//     await driver.findElement(By.css('#addBtn')).click();
//   });

//   it('SHOULD CLICK ON A TASK AND MARK IT AS COMPLETE', async function () {
//     await driver.wait(until.elementsLocated(By.css('.task-text')), 10000);

//     const taskElements = await driver.findElements(By.css('.task-text'));
//     if (taskElements.length > 0) {
//       const firstTaskElement = taskElements[0];
//       await firstTaskElement.click();

//     } else {
//       throw new Error('No tasks found');
//     }
//   });

//   it('SHOULD DELETE A TASK', async function () {
//     await driver.wait(until.elementsLocated(By.css('.task-text')), 10000);

//     const deleteButton = await driver.findElement(By.css('#delbutton'));

//     await deleteButton.click();
//   });

//   it('SHOULD LOGOUT', async function () {
//     await driver.findElement(By.css('#logout-btn')).click();
//   });
// });