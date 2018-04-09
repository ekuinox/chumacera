import { Client, Participant } from "../app";
import fs from "fs-extra";

const APIKEY = JSON.parse(fs.readFileSync("./conf/key.json", "utf8"))["APIKEY"];

const client = new Client(APIKEY);

// マッチ参加者としての情報を抜き出すサンプル
(async () => {
    client.getPlayers("pc-jp", {names: ["lm0x"]})
    .then(res => {
        res[0].relationships.matches[0].getMatch()
        .then(match => {
            match.participants.forEach(participant => {
                if (participant.attributes && participant.attributes.stats.name === "lm0x") {
                    console.log(participant.attributes.stats);
                }
            });
        })
    })
    .catch(e => console.log(e));
})();