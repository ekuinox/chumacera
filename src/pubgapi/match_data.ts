import { Client, Asset, Roster, Participant } from "../app";

namespace PUBGAPI {
	export class MatchData {
		private client: Client;
		readonly type: string = "match";
		readonly id: string;
		readonly attributes: {
			created_at: string;
			duration: number;
			game_mode: string; // Enumとあるんだけど，EventModeでまたいろいろ返ってくるからstringにしとくのが無難っぽい
			patch_version: string;
			shard_id: string;
			stats: any;
			tags: any;
			title_id: string;
		};
		readonly relationships: {
			assets: {type: string, id: string}[];
			rosters: Roster[];
			rounds: any[];
			spectators: any[];
		};
		readonly links: {
			shema?: string;
			self: string;
		}

		readonly participants: Participant[] = [];
		readonly rosters: Roster[] = [];
		readonly assets: Asset[] = [];

		constructor(client: Client, data: any, included: any[]) {
			this.client = client;
			if (data.type !== this.type) throw new Error("Data isn't Match's");
			this.id = data.id;
			this.attributes = {
				created_at: data.attributes.createdAt,
				duration: data.attributes.duration,
				game_mode: data.attributes.gameMode,
				patch_version: data.attributes.patchVersion,
				shard_id: data.attributes.shardId,
				stats: data.attributes.stats,
				tags: data.attributes.tags,
				title_id: data.attributes.titleId
			};

			this.relationships = { assets: [], rosters: [], rounds: [], spectators: [] };
			// assets
			if (data.relationships.assets && data.relationships.assets.data) {
				data.relationships.assets.data.forEach((asset: any) => {
					if (asset.type === "asset") {
						this.relationships.assets.push({
							type: asset.type,
							id: asset.id
						});
					}
				});
			}
			// rosters
			if (data.relationships.rosters && data.relationships.rosters.data) {
				data.relationships.rosters.data.forEach((roster: any) => {
					this.relationships.rosters.push(new Roster(roster));
				});
			}
			// rounds
			if (data.relationships.rounds && data.relationships.rounds.data) {
				data.relationships.rounds.data.forEach((round: any) => {
					if (round.type === "round") this.relationships.rounds.push(round);
				});
			}
			// spectators
			if (data.relationships.spectators && data.relationships.spectators.data) {
				data.relationships.spectators.data.forEach((spectator: any) => {
					if (spectator.type === "spectator") this.relationships.spectators.push(spectator);
				});
			}
			this.links = data.links;
			included.forEach((v: any) => {
				if (v.type === "roster") this.rosters.push(new Roster(v));
				else if (v.type === "participant") this.participants.push(new Participant(v));
				else if (v.type === "asset") this.assets.push(new Asset(this.client, v));
			})
		}
	}
}

export = PUBGAPI;