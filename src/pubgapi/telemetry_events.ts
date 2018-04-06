import {
	Common,
	ItemPackage,
	Item,
	Character,
	Vehicle,
	GameState,
	Location
} from "./telemetry_objects";

namespace TelemetryEvents {
	// Telemetry Events Document
	// https://documentation.playbattlegrounds.com/en/telemetry-events.html

	export class Basic {
		readonly version: number; // _V
		readonly date: string; // _D
		readonly type: string; // T
		readonly common?: Common;

		constructor(data: any) {
			this.version = data["_V"];
			this.date = data["_D"];
			this.type = data["_T"];
			this.common = data["common"];
		}
	}

	export class LogPlayerLogin extends Basic {
		readonly result: boolean;
		readonly error_message: string;
		readonly account_id: string;

		constructor(data: any) {
			super(data);
			this.result = data["result"];
			this.error_message = data["errorMessage"];
			this.account_id = data["accountId"];
		}
	}

	export class LogPlayerCreate extends Basic {
		readonly character: Character;

		constructor(data: any) {
			super(data);
			this.character = new Character(data["character"]);
		}
	}

	export class LogPlayerPosition extends Basic {
		readonly character: Character;
		readonly elapsed_time: number;
		readonly num_alive_players: number;

		constructor(data: any) {
			super(data);
			this.character = new Character(data["character"]);
			this.elapsed_time = data["elapsedTime"];
			this.num_alive_players = data["numAlivePlayers"];
		}
	}

	export class LogPlayerAttack extends Basic {
		readonly attack_id: number;
		readonly attacker: Character; // {Character}
		readonly attack_type: string;
		readonly weapon: Item; // {Item}
		readonly vehicle: Vehicle; // {Vehicle}

		constructor(data: any) {
			super(data);
			this.attack_id = data["attackId"];
			this.attacker = new Character(data["attacker"]);
			this.attack_type = data["attackType"];
			this.weapon = new Item(data["weapon"]);
			this.vehicle = new Vehicle(data["vehicle"]);
		}
	}

	export class LogItemPickup extends Basic {
		constructor(data: any) {
			super(data);
		}
	}

	export class LogItemEquip extends Basic {
		constructor(data: any) {
			super(data);
		}
	}

	export class LogItemUnequip extends Basic {
		constructor(data: any) {
			super(data);
		}
	}

	export class LogVehicleRide extends Basic {
		constructor(data: any) {
			super(data);
		}
	}

	export class LogMatchDefinition extends Basic {
		readonly match_id: string;
		readonly ping_quality?: string; // only for pc

		constructor(data: any) {
			super(data);
			this.match_id = data["MatchId"];
			this.ping_quality = data["PingQuality"];
		}
	}

	export class LogMatchStart extends Basic {
		constructor(data: any) {
			super(data);
		}
	}

	export class LogGameStatePeriodic extends Basic {
		constructor(data: any) {
			super(data);
		}
	}

	export class LogVehicleLeave extends Basic {
		constructor(data: any) {
			super(data);
		}
	}

	export class LogPlayerTakeDamage extends Basic {
		constructor(data: any) {
			super(data);
		}
	}

	export class LogPlayerLogout extends Basic {
		constructor(data: any) {
			super(data);
		}
	}

	export class LogItemAttach extends Basic {
		constructor(data: any) {
			super(data);
		}
	}

	export class LogItemDrop extends Basic {
		constructor(data: any) {
			super(data);
		}
	}

	export class LogPlayerKill extends Basic {
		constructor(data: any) {
			super(data);
		}
	}

	export class LogItemDetach extends Basic {
		constructor(data: any) {
			super(data);
		}
	}

	export class LogItemUse extends Basic {
		constructor(data: any) {
			super(data);
		}
	}

	export class LogCarePackageSpawn extends Basic {
		constructor(data: any) {
			super(data);
		}
	}

	export class LogVehicleDestroy extends Basic {
		constructor(data: any) {
			super(data);
		}
	}

	export class LogCarePackageLand extends Basic {
		constructor(data: any) {
			super(data);
		}
	}

	export class LogMatchEnd extends Basic {
		constructor(data: any) {
			super(data);
		}
	}
}

export = TelemetryEvents;
