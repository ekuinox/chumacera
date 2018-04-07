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
			if (!(data instanceof Array)) {
				console.log("api.pubg.report?");
				return;
			}
			data.forEach((_event: any) => {
				if (!_event["_T"]) return;
				
				switch (_event["_T"]) {
					case "LogPlayerLogin":
						this.events.PlayerLogin.push(new LogPlayerLogin(_event));
						break;
					case "LogPlayerCreate":
						this.events.PlayerCreate.push(new LogPlayerCreate(_event));
						break;
					case "LogPlayerPosition":
						this.events.PlayerPosition.push(new LogPlayerPosition(_event));
						break;
					case "LogPlayerAttack":
						this.events.PlayerAttack.push(new LogPlayerAttack(_event));
						break;
					case "LogItemPickup":
						this.events.ItemPickup.push(new LogItemPickup(_event));
						break;
					case "LogItemEquip":
						this.events.ItemEquip.push(new LogItemEquip(_event));
						break;
					case "LogVehicleRide":
						this.events.VehicleRide.push(new LogVehicleRide(_event));
						break;
					case "LogMatchDefinition":
						this.events.MatchDefinition.push(new LogMatchDefinition(_event));
						break;
					case "LogMatchStart":
						this.events.MatchStart.push(new LogMatchStart(_event));
						break;
					case "LogGameStatePeriodic":
						this.events.GameStatePeriodic.push(new LogGameStatePeriodic(_event));
						break;
					case "LogVehicleLeave":
						this.events.VehicleLeave.push(new LogVehicleLeave(_event));
						break;
					case "LogPlayerTakeDamage":
						this.events.PlayerTakeDamage.push(new LogPlayerTakeDamage(_event));
						break;
					case "LogPlayerLogout":
						this.events.PlayerLogout.push(new LogPlayerLogout(_event));
						break;
					case "LogItemAttach":
						this.events.ItemAttach.push(new LogItemAttach(_event));
						break;
					case "LogItemDrop":
						this.events.ItemDrop.push(new LogItemDrop(_event));
						break;
					case "LogItemUnequip":
						this.events.ItemUnequip.push(new LogItemUnequip(_event));
						break;
					case "LogPlayerKill":
						this.events.PlayerKill.push(new LogPlayerKill(_event));
						break;
					case "LogItemDetach":
						this.events.ItemDetach.push(new LogItemDetach(_event));
						break;
					case "LogItemUse":
						this.events.ItemUse.push(new LogItemUse(_event));
						break;
					case "LogCarePackageSpawn":
						this.events.CarePackageSpawn.push(new LogCarePackageSpawn(_event));
						break;
					case "LogVehicleDestroy":
						this.events.VehicleDestroy.push(new LogVehicleDestroy(_event));
						break;
					case "LogCarePackageLand":
						this.events.CarePackageLand.push(new LogCarePackageLand(_event));
						break;
					case "LogMatchEnd":
						this.events.MatchEnd.push(new LogMatchEnd(_event));
						break;
					default:
						// 漏れを探すために
						this.events.AnyEvent.push(new Basic(_event));
						break;
				}
			});
		}
	}
}

export = PUBGAPI;