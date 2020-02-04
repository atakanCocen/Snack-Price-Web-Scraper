const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto(url);

  const [prod] = await page.$x('//*[@id="productTitle"]');
  const txt = await prod.getProperty("textContent");
  const title = await txt.jsonValue();

  const [prod2] = await page.$x('//*[@id="price_inside_buybox"]');
  const txt2 = await prod2.getProperty("textContent");
  const price = await txt2.jsonValue();

  console.log({ title, price });
  browser.close();
}

scrapeProduct(
  "https://www.amazon.com/Jack-Links-Jerky-Teriyaki-Count/dp/B01HNYKGTA"
);
