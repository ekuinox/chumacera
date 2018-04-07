import { Client } from "../app";
import fs from "fs-extra";

const APIKEY = JSON.parse(fs.readFileSync("./conf/key.json", "utf8"))["APIKEY"];

const client = new Client(APIKEY);


(async () => {
    client.getPlayers("pc-jp", {names: ["lm0x"]})
    .then(res => {
        console.log(res[0].relationships.matches);
    })
    .catch(e => console.log(e));
})();
;