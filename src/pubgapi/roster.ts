import { Participant } from "./participant"

namespace PUBGAPI {
	export class RosterStats {
		readonly rank: number;
		readonly team_id: number;
		
		constructor(data: any) {
			this.rank = data.rank;
			this.team_id = data.teamId;
		}
	}
	export class Roster {
		readonly type: string = "roster";
		readonly id: string;
		readonly attributes?: {
			shard_id: string;
			stats: RosterStats;
			won: boolean;
		};
		readonly relationships?: {
			participants: {type: string, id: string}[];
			team: any
		};
		
		constructor(data: any) {
			if (data.type !== this.type) throw new Error("Data isn't Roster's");
			this.id = data.id;
			if (data.attributes) {
				this.attributes = {
					shard_id: data.attributes.shardId,
					stats: new RosterStats(data.attributes.stats),
					won: data.attributes.won === "true" ? true : false
				};
			}
			if (data.relationships) {
				this.relationships = {
					participants: (() => {
						const participants: {type: string, id: string}[] = [];
						if (data.relationships.participants.data) {
							data.relationships.participants.data.forEach((participant: {type: string, id: string}) => {
								if (participant.type === "participant") participants.push(participant);
							});
						}
						return participants;
					})(),
					team: data.relationships.team
				};
				
			}
		}
	}
}

export = PUBGAPI;