import {
	Basic,
    LogPlayerLogin,
    LogPlayerCreate,
    LogPlayerPosition,
    LogPlayerAttack,
    LogItemPickup,
    LogItemEquip,
    LogItemUnequip,
    LogVehicleRide,
    LogMatchDefinition,
    LogMatchStart,
    LogGameStatePeriodic,
    LogVehicleLeave,
    LogPlayerTakeDamage,
    LogPlayerLogout,
    LogItemAttach,
    LogItemDrop,
    LogPlayerKill,
    LogItemDetach,
    LogItemUse,
    LogCarePackageSpawn,
    LogVehicleDestroy,
    LogCarePackageLand,
    LogMatchEnd
} from "./telemetry_events";

namespace PUBGAPI {
	export class TelemetryData {
		events: {
			PlayerLogin: LogPlayerLogin[];
			PlayerCreate: LogPlayerCreate[];
			PlayerPosition: LogPlayerPosition[];
			PlayerAttack: LogPlayerAttack[];
			ItemPickup: LogItemPickup[];
			ItemEquip: LogItemEquip[];
			ItemUnequip: LogItemUnequip[];
			VehicleRide: LogVehicleRide[];
			MatchDefinition: LogMatchDefinition[];
			MatchStart: LogMatchStart[];
			GameStatePeriodic: LogGameStatePeriodic[];
			VehicleLeave: LogVehicleLeave[];
			PlayerTakeDamage: LogPlayerTakeDamage[];
			PlayerLogout: LogPlayerLogout[];
			ItemAttach: LogItemAttach[];
			ItemDrop: LogItemDrop[];
			PlayerKill: LogPlayerKill[];
			ItemDetach: LogItemDetach[];
			ItemUse: LogItemUse[];
			CarePackageSpawn: LogCarePackageSpawn[];
			VehicleDestroy: LogVehicleDestroy[];
			CarePackageLand: LogCarePackageLand[];
			MatchEnd: LogMatchEnd[];
			AnyEvent: Basic[];
		} = {
			PlayerLogin: [],
			PlayerCreate: [],
			PlayerPosition: [],
			PlayerAttack: [],
			ItemPickup: [],
			ItemEquip: [],
			ItemUnequip: [],
			VehicleRide: [],
			MatchDefinition: [],
			MatchStart: [],
			GameStatePeriodic: [],
			VehicleLeave: [],
			PlayerTakeDamage: [],
			PlayerLogout: [],
			ItemAttach: [],
			ItemDrop: [],
			PlayerKill: [],
			ItemDetach: [],
			ItemUse: [],
			CarePackageSpawn: [],
			VehicleDestroy: [],
			CarePackageLand: [],
			MatchEnd: [],
			AnyEvent: []
		};

		constructor(data: any) {
			if (data instanceof Array) { // TODO: 判定文改善したい
				this.setup(data);
			} else {
				this.setup_from_filtered(data);
			}
		}

		private setup(data: any) {
			data.forEach((_event: any) => {
				if (!_event["_T"]) return;
				this.push(_event);
			});
		}

		private setup_from_filtered(data: any) {
			["filtered", "global"].forEach(key => {
				if (data[key]) {
					for(const event_name in data[key]) {
						console.log(event_name);
						data[key][event_name].forEach((event: any) => {
							this.push(event, event_name);
						});
					}
				}
			});
		}

		private push(event: any, event_name?: string) {
			if (!event_name) event_name = event["_T"];
			switch (event_name) {
				case "LogPlayerLogin":
					this.events.PlayerLogin.push(new LogPlayerLogin(event));
					break;
				case "LogPlayerCreate":
					this.events.PlayerCreate.push(new LogPlayerCreate(event));
					break;
				case "LogPlayerPosition":
					this.events.PlayerPosition.push(new LogPlayerPosition(event));
					break;
				case "LogPlayerAttack":
					this.events.PlayerAttack.push(new LogPlayerAttack(event));
					break;
				case "LogItemPickup":
					this.events.ItemPickup.push(new LogItemPickup(event));
					break;
				case "LogItemEquip":
					this.events.ItemEquip.push(new LogItemEquip(event));
					break;
				case "LogVehicleRide":
					this.events.VehicleRide.push(new LogVehicleRide(event));
					break;
				case "LogMatchDefinition":
					this.events.MatchDefinition.push(new LogMatchDefinition(event));
					break;
				case "LogMatchStart":
					this.events.MatchStart.push(new LogMatchStart(event));
					break;
				case "LogGameStatePeriodic":
					this.events.GameStatePeriodic.push(new LogGameStatePeriodic(event));
					break;
				case "LogVehicleLeave":
					this.events.VehicleLeave.push(new LogVehicleLeave(event));
					break;
				case "LogPlayerTakeDamage":
					this.events.PlayerTakeDamage.push(new LogPlayerTakeDamage(event));
					break;
				case "LogPlayerLogout":
					this.events.PlayerLogout.push(new LogPlayerLogout(event));
					break;
				case "LogItemAttach":
					this.events.ItemAttach.push(new LogItemAttach(event));
					break;
				case "LogItemDrop":
					this.events.ItemDrop.push(new LogItemDrop(event));
					break;
				case "LogItemUnequip":
					this.events.ItemUnequip.push(new LogItemUnequip(event));
					break;
				case "LogPlayerKill":
					this.events.PlayerKill.push(new LogPlayerKill(event));
					break;
				case "LogItemDetach":
					this.events.ItemDetach.push(new LogItemDetach(event));
					break;
				case "LogItemUse":
					this.events.ItemUse.push(new LogItemUse(event));
					break;
				case "LogCarePackageSpawn":
					this.events.CarePackageSpawn.push(new LogCarePackageSpawn(event));
					break;
				case "LogVehicleDestroy":
					this.events.VehicleDestroy.push(new LogVehicleDestroy(event));
					break;
				case "LogCarePackageLand":
					this.events.CarePackageLand.push(new LogCarePackageLand(event));
					break;
				case "LogMatchEnd":
					this.events.MatchEnd.push(new LogMatchEnd(event));
					break;
				default:
					// 漏れを探すために
					this.events.AnyEvent.push(new Basic(event));
					break;
			}
		}
	}
}

export = PUBGAPI;