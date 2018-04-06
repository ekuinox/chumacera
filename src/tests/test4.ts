import { TelemetryData } from "../app"
import fs from "fs-extra";

const telemetry = new TelemetryData(fs.readJSONSync("./samples/telemetry_match.bro.official.2018-04.as.squad.2018.04.05.447ef3e9-ee54-4791-9549-b9cf1b951b28.json").data);

telemetry.events.forEach(event => {
	switch (event.type) {
		case "LogPlayerLogin":
			break;
		case "LogPlayerCreate":
			break;
		case "LogPlayerPosition":
			break;
		case "LogPlayerAttack":
			break;
		case "LogItemPickup":
			break;
		case "LogItemEquip":
			break;
		case "LogVehicleRide":
			break;
		case "LogMatchDefinition":
			break;
		case "LogMatchStart":
			break;
		case "LogGameStatePeriodic":
			break;
		case "LogVehicleLeave":
			break;
		case "LogPlayerTakeDamage":
			break;
		case "LogPlayerLogout":
			break;			
		case "LogPlayerPosition":
			break;
		case "LogItemAttach":
			break;
		case "LogItemDrop":
			break;
		case "LogItemUnequip":
			break;
		case "LogVehicleRide":
			break;
		case "LogPlayerKill":
			break;
		case "LogItemDetach":
			break;
		case "LogItemUse":
			break;
		case "LogCarePackageSpawn":
			break;
		case "LogVehicleDestroy":
			break;
		case "LogCarePackageLand":
			break;
		case "LogMatchEnd":
			break;
		default:
			// 漏れ
			console.log(event);
			break;
	}
});