const puppeteer = require('puppeteer')

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    await page.goto(url);

    const [el] = await page.$x('//*[@id="imgBlkFront"]');
    const src = await el.getProperty('src');
    const imageUrl = await src.jsonValue();

    const [el2] = await page.$x('//*[@id="productTitle"]');
    const txt = await el2.getProperty('textContent');
    const title = await txt.jsonValue();

    const [el3] = await page.$x('//*[@id="corePrice_feature_div"]/div/span/span[2]');
    const txt2 = await el3.getProperty('textContent');
    const price = await txt2.jsonValue();

    console.log({imageUrl
        ,title,price
    })

    browser.close()
}

scrapeProduct('https://www.amazon.com/Black-Swan-Improbable-Robustness-Fragility/dp/081297381X/ref=sr_1_2?crid=6QGGQ7IKN43U&keywords=black+swan&qid=1647897518&sprefix=black+swan%2Caps%2C133&sr=8-2');
