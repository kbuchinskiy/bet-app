const request = require("request");
const cheerio = require("cheerio");
const http = require("http");
const fs = require("fs");


http.createServer(function (req, res) {
    if (req.url === "/") {
        fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    } else if (req.url === "/odds") {
        request('https://www.parimatch.com/en/sport/futbol/anglija-premer-liga', function (error, response, body) {
            const $ = cheerio.load(body);
            const table = $("#f1 .wrapper table > tbody > tr");
            let events = [];

            table.each(function () {
                const text = $(this).find('a.om').html();
                if (text) {
                    events.push(this)
                }
            });

            events = events.filter(event => !$($(event).find("td").get(2)).text().includes("Home"));

            const eventsF = [];
            events.forEach((event, eventIndex) => {
                let eventObj = {
                    teams: [],
                    odds: []
                };
                $(event).find("td").each(function (i, elem) {
                    if (!eventsF[eventIndex]) {
                        eventsF.push(eventObj);
                    }
                    if (i === 2) {
                        eventsF[eventIndex].teams = $(elem).find("a").html().split("<br>");
                    }
                    if ([8, 9, 10].includes(i)) {
                        eventsF[eventIndex].odds.push($(elem).find("a").html());
                    }
                })
            });

            res.end(JSON.stringify(eventsF));
        });
    }


}).listen(7111);
