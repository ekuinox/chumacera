import { TelemetryData } from "../app"
import fs from "fs-extra";

const telemetry = new TelemetryData(fs.readJSONSync("./samples/telemetry_match.bro.official.2018-04.as.squad.2018.04.05.447ef3e9-ee54-4791-9549-b9cf1b951b2.json"));

console.log(telemetry.events);