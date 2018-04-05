import { Client } from "../pubgapi/client";
import fs from "fs-extra";

const APIKEY = JSON.parse(fs.readFileSync("./conf/key.json", "utf8"))["APIKEY"];

const client = new Client(APIKEY);

(async () => {
    client.getPlayer("aaaccount.0992f709b65e4ad294663022efe57958", "pc-jp")
    .then(player => {
        console.log(player);
        /*
        player.relationships.matches.forEach(async match => {
            client.getMatch(match.id, "pc-jp")
            .then(m => {
                fs.writeFileSync(`./samples/match_${m.id}.json`, JSON.stringify(m));
            }).catch(e => console.log(e));
        });
        */
    }).catch(e => console.log(e));
})();
