import { Client } from "../app";
import fs from "fs-extra";

const APIKEY = JSON.parse(fs.readFileSync("./conf/key.json", "utf8"))["APIKEY"];

const client = new Client(APIKEY);

const telemetry_url_filtered = "https://api.pubg.report/bluehole-pubg/pc-as/2018/04/05/18/50/2fdff74e-3902-11e8-8f50-0a586466e49f-telemetry/lm0x"
const telemetry_url = "https://telemetry-cdn.playbattlegrounds.com/bluehole-pubg/pc-as/2018/04/05/18/50/2fdff74e-3902-11e8-8f50-0a586466e49f-telemetry.json";

(async () => {
    client.getTelemetry(telemetry_url)
    .then(res => {
        console.log(res.events);
    })
    .catch(e => console.log(e));
})();
;