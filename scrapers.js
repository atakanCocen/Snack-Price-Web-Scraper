const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto(url);

  const [prod] = await page.$x('//*[@id="productTitle"]');
  const txt = await prod.getProperty("textContent");
  let title = await txt.jsonValue();
  title = title.replace(/\\n/g, "");
  title = title.replace(/  /g, "");

  const [prod2] = await page.$x('//*[@id="price_inside_buybox"]');
  const txt2 = await prod2.getProperty("textContent");
  let price = await txt2.jsonValue();
  price = price.replace(/\\n/g, "");
  price = price.replace(/  /g, "");

  console.log(title, price);

  browser.close();
}

scrapeProduct(
  "https://www.amazon.com/Jack-Links-Jerky-Teriyaki-Count/dp/B01HNYKGTA"
);
