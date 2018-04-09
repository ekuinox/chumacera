import { Participant } from "./participant"

namespace PUBGAPI {
	export class Roster {
		readonly type: string = "roster";
		readonly id: string;
		readonly attributes?: {
			shard_id: string;
			stats: any;
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
					stats: data.attributes.stats,
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