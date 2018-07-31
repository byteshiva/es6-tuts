const puppeteer = require('puppeteer');

(async () => {
  const phoneToDial = 0000000000
  const oneSec = 1000
  const threeSec = 3000
  const twoMin = 120000
  const oneMin = 60000
  const siteForDial = 'https://www.webrtc-enabled-site.com' // it can be whatsup, or hangout
  const countryName ='USA'
  const phoneDialerSelector = 'body > div.main-wrapper > div.dial-free.gradient-background.content-box > div > div:nth-child(2) > div.col-lg-4 > div > div.option-buttons > label:nth-child(4) > span'
  const dialpadAreaSelector = '#dialpad-area > div:nth-child(1) > select'
  const phoneElemSelector = '#phone_number'
  const areaCodeSelector = '#dialpad-area > div:nth-child(1) > select'
  const phoneNumSelector = '#phone_number'
  const btnCallSelector = '#btncall'
  const beforeDialCallScrnShotPath = 'phoneNumberType.png'
  const afterDialCallScrnShotPath = ''btnAfterDial.png'

  // Enable media stream
  // https://peter.sh/experiments/chromium-command-line-switches/
  const browser = await puppeteer.launch({
      args: [ '--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream']
  });
  
  const page = await browser.newPage();
  await page.goto(siteForDial);
  
  page.once('load', () => console.log('Page loaded!'));
  
  // Click and load some web component which has the phone dialer
  const callElement = await page.$(phoneDialerSelector);
  await callElement.click();
  await page.waitFor(threeSec);
	await (() => console.log(`after ${threeSec} secs`));

  // Enter the number to be dial
  await page.$(dialpadArea).then(() => console.log("page loaded"));
  const phoneElement = await page.$(phoneElemSelector);
	await phoneElement.click();

  // Example -- select a value from dropdown list if there exist one to get ISD Area code
  const selectElem = await page.$(areaCodeSelector);
	selectElem.type(countryName);
  
  // Wait until the dom gets loaded.
  await page.waitFor(threeSec);

  // Enter the phone to dial 
  const phonenumberElem = await page.$(phoneNumSelector);
	phonenumberElem.type(phoneToDial);
  await page.waitFor(threeSec);
  
  await page.screenshot({path: beforeDialCallScrnShotPath, fullPage: true});

  const btncallElem = await page.$(btnCallSelector);
	await btncallElem.click();

  await page.waitFor(oneMin);
  await page.screenshot({path: afterDialCallScrnShotPath, fullPage: true});

  await browser.close();
})();
