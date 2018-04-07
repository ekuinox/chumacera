namespace PUBGAPI {
	export class Roster {
		readonly type: string = "roster";
		readonly id: string;
		readonly attributes?: {
			shardId: string;
			stats: any;
			won: boolean; // TODO : TO boolean
		};
		readonly relationships?: {
			participants: any; // めんどい
			team: any
		}
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
					participants: data.relationships.participants,
					team: data.relationships.team
				};
			}
		}
	}
}

export = PUBGAPI;