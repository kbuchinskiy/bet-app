import cheerio from "cheerio";
import axios from "axios";

export default class ParseService {

    constructor(url) {
        this.url = url;
    }

    async getData() {
        const data = await this.getResponseData();
        return this.parseResponseData(data).slice(0, 10);
    }

    async getResponseData() {
        const response = await axios.get(this.url);
        return response.data;
    }

    parseResponseData(html) {
        // NEED REFACTOR
        const $ = cheerio.load(html);
        const table = $("#f1 .wrapper table > tbody > tr");
        let events = [];

        table.each(function () {
            const rowTeamsCell = $(this).find('a.om').text();
            if (rowTeamsCell && !rowTeamsCell.includes("Home")) {
                events.push(this)
            }
        });

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

        return eventsF;
    }
}


