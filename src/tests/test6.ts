import { Client } from "../app";
import fs from "fs-extra";

const APIKEY = JSON.parse(fs.readFileSync("./conf/key.json", "utf8"))["APIKEY"];

const client = new Client(APIKEY);


(async () => {
    client.getPlayers("pc-jp", {names: ["lm0x"]})
    .then(res => {
        res[0].relationships.matches[0].getMatch()
        .then(match => {
            match.assets[0].getTelemetry("lm0x")
            .then(telemetry => {
                console.log(telemetry.events.ItemUse);
            })
        })
    })
    .catch(e => console.log(e));
})();