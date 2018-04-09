import { Client, Participant } from "../app";
import fs from "fs-extra";

const APIKEY = JSON.parse(fs.readFileSync("./conf/key.json", "utf8"))["APIKEY"];

const client = new Client(APIKEY);

(async () => {
    client.getPlayers("pc-jp", {names: ["lm0x"]})
    .then(res => {
        res[0].relationships.matches[0].getMatch()
        .then(match => {
            console.log(match.rosters[0].relationships);
        })
    })
    .catch(e => console.log(e));
})();