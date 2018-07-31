import puppeteer from 'puppeteer';
import * as data from './config/config.json';
const conf = data.default;
const {
    phoneToDial,
    oneSec,
    threeSec,
    twoMin,
    oneMin,
    siteForDial,
    countryName,
    phoneDialerSelector,
    dialpadAreaSelector,
    phoneElemSelector,
    areaCodeSelector,
    phoneNumSelector,
    btnCallSelector,
    beforeDialCallScrnShotPath,
    afterDialCallScrnShotPath
} = conf;


(async () => {

    console.log(puppeteer);
    // Enable media stream
    // https://peter.sh/experiments/chromium-command-line-switches/
    const browser = await puppeteer.launch({
        args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream']
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
    await page.$(dialpadAreaSelector).then(() => console.log("page loaded"));
    const phoneElement = await page.$(phoneElemSelector);
    await phoneElement.click();

    // Example -- select a value from dropdown list if there exist one to get ISD Area code
    try {
        const selectElem = await page.$(areaCodeSelector);
        selectElem.type(countryName);
    } catch (e) {
        console.log('[ selectElem ]', e)
    }
    // Wait until the dom gets loaded.
    await page.waitFor(threeSec);
    // Enter the phone to dial 
    const phonenumberElem = await page.$(phoneNumSelector);
    phonenumberElem.type(phoneToDial);
    await page.waitFor(threeSec);

    await page.screenshot({
        path: beforeDialCallScrnShotPath,
        fullPage: true
    });
    const btncallElem = await page.$(btnCallSelector);
    await btncallElem.click();
    await page.waitFor(oneMin);

    await page.screenshot({
        path: afterDialCallScrnShotPath,
        fullPage: true
    });

    await browser.close();
})();
