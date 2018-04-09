namespace PUBGAPI {
	export class ParticipantStats {
		readonly DBNOs: number; // ダウン復帰回数っぽい
		readonly assists: number;
		readonly boosts: number;
		readonly damage_dealt: number;
		readonly death_type: string; // alive, byplayer, suicideの三値
		readonly headshot_kills: number;
		readonly heals: number;
		readonly kill_place: number;
		readonly kill_points_delta: number;
		readonly kill_streaks: number;
		readonly kills: number;
		readonly last_kill_points: number;
		readonly longest_kill: number;
		readonly most_damage: number;
		readonly name: string; // username
		readonly player_id: string;
		readonly revives: number; // DBNOsとの違いがわからん
		readonly ride_distance: number;
		readonly road_kills: number;
		readonly team_kills: number;
		readonly time_survived: number;
		readonly vehicle_destroys: number;
		readonly walk_distance: number;
		readonly weapons_acquired: number;
		readonly win_place: number;
		readonly win_points_delta: number;

		constructor(data: any) {
			this.DBNOs = data.DBNOs;
			this.assists = data.assists;
			this.boosts = data.boosts;
			this.damage_dealt = data.damageDealt;
			this.death_type = data.deathType;
			this.headshot_kills = data.headshotKills;
			this.heals = data.heals;
			this.kill_place = data.killPlace;
			this.kill_points_delta = data.killPointsDelta;
			this.kill_streaks = data.killStreaks;
			this.kills = data.kills;
			this.last_kill_points = data.lastKillPoints;
			this.longest_kill = data.longestKill;
			this.most_damage = data.mostDamage;
			this.name = data.name;
			this.player_id = data.playerId;
			this.revives = data.revives;
			this.ride_distance = data.rideDistance;
			this.road_kills = data.roadKills;
			this.team_kills = data.teamKills;
			this.time_survived = data.timeSurvived;
			this.vehicle_destroys = data.vehicleDestroys;
			this.walk_distance = data.walkDistance;
			this.weapons_acquired = data.weaponsAcquired;
			this.win_place = data.winPlace;
			this.win_points_delta = data.winPoints;
		}
	}

	export class Participant {
		readonly type: string = "participant";
		readonly id: string;
		readonly attributes: {
			actor: string; // 基本的に空っぽい
			shard_id: string;
			stats: ParticipantStats;
		};
		constructor(data: any) {
			if (data.type !== this.type) throw new Error("Data isn't Participant's");
			this.id = data.id;
			if (data.attributes) {
				this.attributes = {
					actor: data.attributes.actor,
					shard_id: data.attributes.shardId,
					stats: new ParticipantStats(data.attributes.stats)
				};
			} else {
				this.attributes = {
					actor: "",
					shard_id: "",
					stats: new ParticipantStats({})
				};
			}

		}
	}
}

export = PUBGAPI;