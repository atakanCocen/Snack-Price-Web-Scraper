const puppeteer = require("puppeteer");

async function scrapeProduct3(url) {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto(url);

  const [prod] = await page.$x('/html/body/div[1]/div/div/div[2]/div/div[1]/div/div[1]/div/div/div/div/div[3]/div[5]/div/div[3]/div/h1');
  const txt = await prod.getProperty("textContent");
  let title3 = await txt.jsonValue();
  title3 = title3.replace(/\\n/g, "");
  title3 = title3.replace(/  /g, "");

  const [prod2] = await page.$x('//*[@id="price"]/div/span[1]/span/span[1]');
  const txt2 = await prod2.getProperty("textContent");
  let price3 = await txt2.jsonValue();
  price3 = price3.replace(/\\n/g, "");
  price3 = price3.replace(/  /g, "");

  console.log(title3, price3);

  browser.close();
}

scrapeProduct3(
  "https://www.walmart.com/ip/Product-of-Jack-Link-s-Teriyaki-Beef-Jerky-3-25-oz-bag-4-ct-Jerky-Bulk-Savings/622065619?wmlspartner=wlpa&selectedSellerId=11926&adid=22222222227315618596&wl0=&wl1=g&wl2=c&wl3=391918199650&wl4=aud-430887228898:pla-1023275431592&wl5=1015516&wl6=&wl7=&wl8=&wl9=pla&wl10=117089611&wl11=online&wl12=622065619&veh=sem&gclid=Cj0KCQiAm4TyBRDgARIsAOU75son-P7gE4TFeSKdIEtaKFU60vdMfjjyRaCjF7eWVb-hMsJi98G1ROsaAstWEALw_wcB"
);
