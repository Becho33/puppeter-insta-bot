
const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.instagram.com/?hl=en");
    
    await page.waitForSelector("._2hvTZ.pexuQ.zyHYP");


    await page.type("._2hvTZ.pexuQ.zyHYP","meditationofyouth", {delay: 100});
    await page.type("#loginForm > div > div:nth-child(2) > div > label > input","whymelord", {delay: 100});
    await page.click(".qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.bkEs3.CovQj.jKUp7.DhRcB");
    await page.waitForNavigation();
    await page.click(".sqdOP.L3NKy.y3zKF");
    await page.waitForNavigation();

    await page.click(".aOOlW.HoLwm");
    


   // await browser.close();
})();