import { TelemetryData } from "../app"
import fs from "fs-extra";

const telemetry = new TelemetryData(fs.readJSONSync("./samples/2fdff74e-3902-11e8-8f50-0a586466e49f-telemetry.json"));

console.log(telemetry.events);