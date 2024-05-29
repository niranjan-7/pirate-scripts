const fs = require('fs');
const { stringify } = require('querystring');
const user = "Aandryold1"
count = 634 // number of pages in pirate bay

// console.log("https://pirate-proxy.ong/newapi/q.php?q=user%3"+user+"%3A"+stringify(num))

async function fetchData(num) {
    try {
      var page = "%3A"+num
      const response = await fetch("https://pirate-proxy.ong/newapi/q.php?q=user%3"+user+page, {
        headers: {
          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9",
          "priority": "u=0, i",
          "sec-ch-ua": "\"Brave\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "sec-gpc": "1",
          "cookie": "cf_clearance=UxadqxRQztXbCyac.OJzEQnN42ltvHrKHPThYrC1pA0-1717000153-1.0.1.1-yUie59d.eU3PdzrPsKQw7Nxsfnkas4Z0DDyfSFlfGrBHb6LMNZEdHJAC.meGtdZR2SX_NmAhPFNpiszCSioBWA",
          "Referer": "https://pirate-proxy.ong/search.php?q=user:andryold1",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        method: "GET"
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
  
      const data = await response.json();
      const formattedData = data.map(item => JSON.stringify(item, null, 2)).join('\n');
        fs.appendFile('Aandryold1_sub.txt', page +'\n'+ formattedData + '\n', (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log(page+' done')
          });
    } catch (error) {
      console.error('Fetch error: ', error);
    }
  }


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    for (let i = 0; i < count; i++) {
        await fetchData(i);
        await sleep(1000); // delay of 1 second
    }
}

main();