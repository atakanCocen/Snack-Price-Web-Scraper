const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto(url);

  const [prod] = await page.$x(
    '//*[@id="main"]/div/div/div[1]/div/div[1]/h1/div'
  );
  const txt = await prod.getProperty("textContent");
  let title2 = await txt.jsonValue();
  title2 = title2.replace(/\\n/g, "");
  title2 = title2.replace(/  /g, "");

  const [prod2] = await page.$x(
    '//*[@id="prod21232762-price"]/div[1]/div[1]/div/div/span[1]/span/span[1]'
  );
  const txt2 = await prod2.getProperty("textContent");
  let price2 = await txt2.jsonValue();
  price2 = price2.replace(/\\n/g, "");
  price2 = price2.replace(/  /g, "");

  console.log(title2, price2);

  browser.close();
}

scrapeProduct(
  "https://www.samsclub.com/p/jl-teriyaki-3-25-oz-4-3-25/prod21232762"
);
