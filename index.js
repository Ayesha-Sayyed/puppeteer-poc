//with hmtl string
const puppeteer = require('puppeteer');

(async () => {

  // Create a browser instance
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  //Get HTML content
  const html = "\n<div style = ' padding: 20px; display: block; box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12); /* width: fit-content; */ border-radius: 20px;'>\n<p>Hi Folks ...!,</p><p>Username:- swaraj.chavan@kennect.io</p><p>employerGID :- EMP3</p><p><br></p><p>find below incentive :-</p><p>Date :- 24th_Sep_2022</p><p>Incentive achieved : EMP3</p><p>Thank you</p><p><br></p><p><br></p><p><br></p>\n</div>\n"

  await page.setContent(html, { waitUntil: 'domcontentloaded' });

  // To reflect CSS used for screens instead of print
  await page.emulateMediaType('screen');

  // Downlaod the PDF
  const pdf = await page.pdf({
    path: 'result.pdf',
    margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
    printBackground: true,
    format: 'A4',
  });

  // Close the browser instance
  await browser.close();
})();