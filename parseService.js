import cheerio from "cheerio";
import axios from "axios";

const TABLE_QUERY_SELECTOR = "#f1 .wrapper > table > tbody";

export default class ParseService {

    constructor(url) {
        this.url = url;
    }

    async getData() {
        const data = await this.getResponseData();
        return this.parseResponseDataHTML(data).slice(0, 10);
    }

    async getResponseData() {
        const response = await axios.get(this.url);
        return response.data;
    }

    parseResponseDataHTML(html) {
        const $ = cheerio.load(html);
        const rowElements = $(TABLE_QUERY_SELECTOR);
        let rowElementsFiltered = [];

        rowElements.each((i, rowElem) => {
            const hasPropClass = $(rowElem).hasClass("props");
            const childrenAmount = $(rowElem).find("tr > td").length;
            const isHomeAwayEvent = $(rowElem).html().includes("Home");

            if (!hasPropClass && childrenAmount > 1 && !isHomeAwayEvent) {
                rowElementsFiltered.push(rowElem);
            }
        });

        const rowsData = [];

        rowElementsFiltered.forEach((row, rowIndex) => {
            let rowData = {
                teams: [],
                odds: []
            };

            $(row).find("td").each(function (i, cell) {
                if (!rowsData[rowIndex]) {
                    rowsData.push(rowData);
                }
                if (i === 2) {
                    rowsData[rowIndex].teams = $(cell).find("a").html().split("<br>");
                }
                if ([8, 9, 10].includes(i)) {
                    rowsData[rowIndex].odds.push($(cell).find("a").html());
                }
            })
        });

        return rowsData;
    }
}