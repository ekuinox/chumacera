namespace TelemetryObjects {
    // Telemetry Objects
    // https://documentation.playbattlegrounds.com/en/telemetry-objects.html#telemetry-objects

    export class Common {
        readonly match_id: string;
        readonly map_name: string;
        readonly is_game: number;
        
        constructor(data: any) {
            this.match_id = data["matchId"];
            this.map_name = data["mapName"];
            this.is_game = data["isGame"];
        }
    }

    export class ItemPackage {
        readonly id: string;
        readonly location: Location;
        readonly items: Item[] = [];

        constructor(data: any) {
            this.id = data["itemPackageId"];
            this.location = new Location(data["location"]);
            data["items"].forEach((item: any) => {
                this.items.push(new Item(item));
            });
        }
    }

    export class Item {
        readonly id: string;
        readonly stack_count: number;
        readonly category: string;
        readonly sub_category: string;
        readonly attached_items: string[];

        constructor(data: any) {
            this.id = data["itemId"];
            this.stack_count = data["stackCount"];
            this.category = data["category"];
            this.sub_category = data["subCategory"];
            this.attached_items = data["attachedItems"];
        }
    }

    export class Character {
        readonly name: string;
        readonly team_id: number;
        readonly health: number;
        readonly location: Location;
        readonly ranking: number;
        readonly account_id: string;

        constructor(data: any) {
            this.name = data["name"];
            this.team_id = data["teamId"];
            this.health = data["health"];
            this.location = data["location"];
            this.ranking = data["ranking"];
            this.account_id = data["accountId"];
        }
    }

    export class Vehicle {
        readonly type: string;
        readonly id: string;
        readonly health_percent: number;
        readonly feul_percent: number;

        constructor(data: any) {
            this.type = data["vehicleType"];
            this.id = data["vehicleId"];
            this.health_percent = data["healthPercent"];
            this.feul_percent = data["feulPercent"];
        }
    }

    export class GameState {
        readonly elapsed_time: number;
        readonly num_alive_teams: number;
        readonly num_join_players: number;
        readonly num_start_players: number;
        readonly safety_zone_position: Location;
        readonly safety_zone_radius: number;
        readonly poison_gas_warning_position: Location;
        readonly poison_gas_warning_radius: number;
        readonly red_zone_position: Location;
        readonly red_zone_radius: number;

        constructor(data: any) {
            this.elapsed_time = data["elapsedTime"];
            this.num_alive_teams = data["numAliveTeams"];
            this.num_join_players = data["numStartPlayers"];
            this.num_start_players = data["numAlivePlayers"];
            this.safety_zone_position = new Location(data["safetyZonePosition"]);
            this.safety_zone_radius = data["safetyZoneRadius"];
            this.poison_gas_warning_position = new Location(data["poisonGasWarningPosition"]);
            this.poison_gas_warning_radius = data["poisonGasWarningRadius"];
            this.red_zone_position = new Location(data["redZonePosition"]);
            this.red_zone_radius = data["redZoneRadius"];
        }
    }

    export class Location {
        readonly x: number;
        readonly y: number;
        readonly z: number;
        
        constructor(data: any) {
            this.x = data["x"];
            this.y = data["y"];
            this.z = data["z"];
        }
    }
}

export = TelemetryObjects;