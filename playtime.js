const puppeteer = require("puppeteer");
const targetuser = ["alanyacennetimm", "macramenjewelry", "elohapleiadian"];
const username_of_client ="meditationofyouth";
const password_of_client ="whymelord";
const target_usernames =[];
const emails_targets =[];


(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.instagram.com/?hl=en");
    
    await page.waitForSelector("._2hvTZ.pexuQ.zyHYP");


    await page.type("._2hvTZ.pexuQ.zyHYP",username_of_client, {delay: 100});
    await page.type("#loginForm > div > div:nth-child(2) > div > label > input",password_of_client, {delay: 100});
    await page.click(".qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.bkEs3.CovQj.jKUp7.DhRcB");
    await page.waitForNavigation();
    await page.click(".sqdOP.L3NKy.y3zKF");
    await page.waitForNavigation();
    await page.goto("https://www.instagram.com/" + targetuser[0]);
    await page.click("#react-root > section > main > div > header > section > ul > li:nth-child(2) > a", { waitUntil: 'domcontentloaded' });
    await page.target().createCDPSession();
    function likes20 () {
        (() => {
            let i = 0;
            const followInterval = setInterval(() => {
                if (i >= 20) clearInterval(followInterval);
                const buttons = document.querySelectorAll('button.sqdOP.L3NKy.y3zKF');
                const nextButton = buttons[i];
                if (nextButton.textContent.toLowerCase() === 'follow') { // write in your language
                    nextButton.click();
                }
                i++;
            }, 1000)
        })();
    
        
    };
    await page.addScriptTag({content: `${likes20}`});
    
    
    await page.evaluate(likes20);
    await page.waitFor(30000);

    /////////////////////////////// next cycle
    await page.goto("https://www.instagram.com/" + targetuser[1]);
    await page.click("#react-root > section > main > div > header > section > ul > li:nth-child(2) > a", { waitUntil: 'domcontentloaded' });
    await page.target().createCDPSession();
    function likes20 () {
        (() => {
            let i = 0;
            const followInterval = setInterval(() => {
                if (i >= 20) clearInterval(followInterval);
                const buttons = document.querySelectorAll('button.sqdOP.L3NKy.y3zKF');
                const nextButton = buttons[i];
                if (nextButton.textContent.toLowerCase() === 'follow') { // write in your language
                    nextButton.click();
                }
                i++;
            }, 1000)
        })();
    
        
    };
    await page.addScriptTag({content: `${likes20}`});
    
    
    await page.evaluate(likes20);
    await page.waitFor(30000);

    await page.goto("https://www.instagram.com/" + targetuser[2]);
    await page.click("#react-root > section > main > div > header > section > ul > li:nth-child(2) > a", { waitUntil: 'domcontentloaded' });
    await page.target().createCDPSession();
    function likes20 () {
        (() => {
            let i = 0;
            const followInterval = setInterval(() => {
                if (i >= 20) clearInterval(followInterval);
                const buttons = document.querySelectorAll('button.sqdOP.L3NKy.y3zKF');
                const nextButton = buttons[i];
                if (nextButton.textContent.toLowerCase() === 'follow') { // write in your language
                    nextButton.click();
                }
                i++;
            }, 1000)
        })();
    
        
    };
    await page.addScriptTag({content: `${likes20}`});
    
    
    await page.evaluate(likes20);
    await page.waitFor(30000);

   
    await browser.close();
})();



module.exports = {
    one: async () => {

    }
}