import { Client, Shard, Participant } from "../app";
import fs from "fs-extra";

const APIKEY = JSON.parse(fs.readFileSync("./conf/key.json", "utf8"))["APIKEY"];

const client = new Client(APIKEY);

(async () => {
    client.getPlayers(Shard.PC_JP, {names: ["lm0x"]})
    .then(res => {
        res[0].relationships.matches[0].getMatch()
        .then(match => {
            match.rosters.forEach(roster => {
                console.log(roster.attributes);
            });
        })
    })
    .catch(e => console.log(e));
})();