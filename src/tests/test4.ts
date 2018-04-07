import { TelemetryData } from "../app"
import fs from "fs-extra";

const telemetry = new TelemetryData(fs.readJSONSync("./samples/52a6dea5-370e-11e8-80f2-0a586466e20c-telemetry.json"));

console.log(telemetry.events);