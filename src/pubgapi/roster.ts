import { Participant } from "./participant"

namespace PUBGAPI {
	export class Roster {
		readonly type: string = "roster";
		readonly id: string;
		readonly attributes?: {
			shardId: string;
			stats: any;
			won: boolean;
		};
		readonly relationships?: {
			participants: Participant[];
			team: any
		};
		
		constructor(data: any) {
			if (data.type !== this.type) throw new Error("Data isn't Roster's");
			this.id = data.id;
			if (data.attributes) {
				this.attributes = {
					shardId: data.attributes.shardId,
					stats: data.attributes.stats,
					won: data.attributes.won === "true" ? true : false
				};
			}
			if (data.relationships) {
				this.relationships = {
					participants: (() => {
						const participants: Participant[] = [];
						if (data.relationships.participants.data) {
							data.relationships.participants.data.forEach((p: any) => {
								participants.push(new Participant(p));
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