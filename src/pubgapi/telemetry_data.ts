import TelemetryEvents from "./telemetry_events";

namespace PUBGAPI {
	export class TelemetryData {
		events: TelemetryEvents.Basic[] = [];

		constructor(data: any) {
			data.forEach((event: any) => {
				if (!event["_T"]) return;
				switch (event["_T"]) {
					case "LogPlayerLogin":
						this.events.push(new TelemetryEvents.LogPlayerLogin(event));
						break;
					case "LogPlayerCreate":
						this.events.push(new TelemetryEvents.LogPlayerCreate(event));
						break;
					case "LogPlayerPosition":
						this.events.push(new TelemetryEvents.LogPlayerPosition(event));
						break;
					case "LogPlayerAttack":
						this.events.push(new TelemetryEvents.LogPlayerAttack(event));
						break;
					case "LogItemPickup":
						this.events.push(new TelemetryEvents.LogItemPickup(event));
						break;
					case "LogItemEquip":
						this.events.push(new TelemetryEvents.LogItemEquip(event));
						break;
					case "LogVehicleRide":
						this.events.push(new TelemetryEvents.LogVehicleRide(event));
						break;
					case "LogMatchDefinition":
						this.events.push(new TelemetryEvents.LogMatchDefinition(event));
						break;
					case "LogMatchStart":
						this.events.push(new TelemetryEvents.LogMatchStart(event));
						break;
					case "LogGameStatePeriodic":
						this.events.push(new TelemetryEvents.LogGameStatePeriodic(event));
						break;
					case "LogVehicleLeave":
						this.events.push(new TelemetryEvents.LogVehicleLeave(event));
						break;
					case "LogPlayerTakeDamage":
						this.events.push(new TelemetryEvents.LogPlayerTakeDamage(event));
						break;
					case "LogPlayerLogout":
						this.events.push(new TelemetryEvents.LogPlayerLogout(event));
						break;
					case "LogPlayerPosition":
						this.events.push(new TelemetryEvents.LogPlayerPosition(event));
						break;
					case "LogItemAttach":
						this.events.push(new TelemetryEvents.LogItemAttach(event));
						break;
					case "LogItemDrop":
						this.events.push(new TelemetryEvents.LogItemDrop(event));
						break;
					case "LogItemUnequip":
						this.events.push(new TelemetryEvents.LogItemUnequip(event));
						break;
					case "LogVehicleRide":
						this.events.push(new TelemetryEvents.LogVehicleRide(event));
						break;
					case "LogPlayerKill":
						this.events.push(new TelemetryEvents.LogPlayerKill(event));
						break;
					case "LogItemDetach":
						this.events.push(new TelemetryEvents.LogItemDetach(event));
						break;
					case "LogItemUse":
						this.events.push(new TelemetryEvents.LogItemUse(event));
						break;
					case "LogCarePackageSpawn":
						this.events.push(new TelemetryEvents.LogCarePackageSpawn(event));
						break;
					case "LogVehicleDestroy":
						this.events.push(new TelemetryEvents.LogVehicleDestroy(event));
						break;
					case "LogCarePackageLand":
						this.events.push(new TelemetryEvents.LogCarePackageLand(event));
						break;
					case "LogMatchEnd":
						this.events.push(new TelemetryEvents.LogMatchEnd(event));
						break;
					default:
						// 漏れを探すために
						this.events.push(new TelemetryEvents.Basic(event));
						break;
				}
			});
		}
	}
}

export = PUBGAPI;