import { Client } from "../pubgapi/client";
import fs from "fs-extra";

const APIKEY = JSON.parse(fs.readFileSync("./conf/key.json", "utf8"))["APIKEY"];

const client = new Client(APIKEY);

(async () => {
    client.get("shards/pc-jp/matches/52ac10e4-b0b7-497d-83c1-5e41bcd1efb6", {}, true)
    .then(r => {
        fs.writeFileSync("./samples/matches{id}", r);
    }).catch(e => console.log(e));
})();
