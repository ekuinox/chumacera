import { Client } from "../app";
import fs from "fs-extra";

const APIKEY = JSON.parse(fs.readFileSync("./conf/key.json", "utf8"))["APIKEY"];

const client = new Client(APIKEY);

(async () => {
    client.getMatch("pc-jp", "447ef3e9-ee54-4791-9549-b9cf1b951b28")
    .then(res => {
        client.getTelemetry(res.assets[0].attributes.URL)
        .then(res => console.log(res));
    })
    .catch(e => console.log(e));
})();
