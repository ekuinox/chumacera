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
		readonly type?: string; // T
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
		readonly character: Character;
		readonly item: Item;

		constructor(data: any) {
			super(data);
			this.character = new Character(data["character"]);
			this.item = new Item(data["item"]);
		}
	}

	export class LogItemEquip extends Basic {
		readonly character: Character;
		readonly item: Item;

		constructor(data: any) {
			super(data);
			this.character = new Character(data["character"]);
			this.item = new Item(data["item"]);
		}
	}

	export class LogItemUnequip extends Basic {
		readonly character: Character;
		readonly item: Item;

		constructor(data: any) {
			super(data);
			this.character = new Character(data["character"]);
			this.item = new Item(data["item"]);
		}
	}

	export class LogVehicleRide extends Basic {
		readonly character: Character;
		readonly vehicle: Vehicle;

		constructor(data: any) {
			super(data);
			this.character = new Character(data["character"]);
			this.vehicle = new Vehicle(data["vehicle"]);
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
		readonly characters: Character[] = [];

		constructor(data: any) {
			super(data);
			data["characters"].forEach((character: any) => {
				this.characters.push(new Character(character));
			});
		}
	}

	export class LogGameStatePeriodic extends Basic {
		readonly state: GameState;
		constructor(data: any) {
			super(data);
			this.state = new GameState(data["gameState"]);
		}
	}

	export class LogVehicleLeave extends Basic {
		readonly character: Character;
		readonly vehicle: Vehicle;

		constructor(data: any) {
			super(data);
			this.character = new Character(data["character"]);
			this.vehicle = new Vehicle(data["vehicle"]);
		}
	}

	export class LogPlayerTakeDamage extends Basic {
		readonly attack_id: number;
		readonly attacker: Character;
		readonly victim: Character;
		readonly type_category: string;
		readonly reason: string;
		readonly damage: number;
		readonly causer_name: string;

		constructor(data: any) {
			super(data);
			this.attack_id = data["attackId"];
			this.attacker = new Character(data["attacker"]);
			this.victim = new Character(data["victim"]);
			this.type_category = data["damageTypeCategory"];
			this.reason = data["damageReason"];
			this.damage = data["damage"];
			this.causer_name = data["damageCauserName"];
			
		}
	}

	export class LogPlayerLogout extends Basic {
		readonly account_id: string;

		constructor(data: any) {
			super(data);
			this.account_id = data["accountId"];
		}
	}

	export class LogItemAttach extends Basic {
		readonly character: Character;
		readonly parent_item: Item;
		readonly child_item: Item;

		constructor(data: any) {
			super(data);
			this.character = new Character(data["character"]);
			this.parent_item = new Item(data["parentItem"]);
			this.child_item = new Item(data["childItem"]);
		}
	}

	export class LogItemDrop extends Basic {
		readonly character: Character;
		readonly item: Item;

		constructor(data: any) {
			super(data);
			this.character = new Character(data["character"]);
			this.item = new Item(data["item"]);
		}
	}

	export class LogPlayerKill extends Basic {
		readonly attack_id: number;
		readonly killer: Character;
		readonly victim: Character;
		readonly type_category: string;
		readonly causer_name: string;
		readonly distance: number;

		constructor(data: any) {
			super(data);
			this.attack_id = data["attackId"];
			this.killer = new Character(data["killer"]);
			this.victim = new Character(data["victim"]);
			this.type_category = data["damageTypeCategory"];
			this.causer_name = data["damageCauserName"];
			this.distance = data["distance"];
			
		}
	}

	export class LogItemDetach extends Basic {
		readonly character: Character;
		readonly parent_item: Item;
		readonly child_item: Item;

		constructor(data: any) {
			super(data);
			this.character = new Character(data["character"]);
			this.parent_item = new Item(data["parentItem"]);
			this.child_item = new Item(data["childItem"]);
		}
	}

	export class LogItemUse extends Basic {
		readonly character: Character;
		readonly item: Item;

		constructor(data: any) {
			super(data);
			this.character = new Character(data["character"]);
			this.item = new Item(data["item"]);
		}
	}

	export class LogCarePackageSpawn extends Basic {
		readonly item_package: ItemPackage;

		constructor(data: any) {
			super(data);
			this.item_package = new ItemPackage(data["itemPackage"]);
		}
	}

	export class LogVehicleDestroy extends Basic {
		readonly attack_id: number;
		readonly attacker: Character;
		readonly vehicle: Vehicle;
		readonly type_category: string;
		readonly causer_name: string;
		readonly distance: number;

		constructor(data: any) {
			super(data);
			this.attack_id = data["attackId"];
			this.attacker = new Character(data["attacker"]);
			this.vehicle = new Vehicle(data["vehicle"]);
			this.type_category = data["damageTypeCategory"];
			this.causer_name = data["damageCauserName"];
			this.distance = data["distance"];
			
		}
	}

	export class LogCarePackageLand extends Basic {
		readonly item_package: ItemPackage;

		constructor(data: any) {
			super(data);
			this.item_package = new ItemPackage(data["itemPackage"]);
		}
	}

	export class LogMatchEnd extends Basic {
		readonly characters: Character[] = [];

		constructor(data: any) {
			super(data);
			data["characters"].forEach((character: any) => {
				this.characters.push(new Character(character));
			});
		}
	}
}

export = TelemetryEvents;
