import { Participant } from "./participant";
import { Roster } from "./roster";

namespace PUBGAPI {
    export class MatchData {
        readonly type: string = "match";
        readonly id: string;
        readonly attributes: {
            createdAt: string;
            duration: number;
            gameMode: string;
            patchVersion?: string;
            shardId: string;
            stats?: any;
            tags?: any;
            titleId: string;     
        };
        readonly relationships: {
            assets: any[];
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

        constructor(data: any, included: any[]) {
            if (data.type !== this.type) throw new Error("Data isn't Match's");
            this.id = data.id;
            this.attributes = data.attributes;
            this.relationships = { assets : [], rosters: [], rounds: [], spectators: [] };
            // assets
            if (data.relationships.assets && data.relationships.assets.data) {
                data.relationships.assets.data.forEach((asset: any) => {
                    if (asset.type === "asset") this.relationships.assets.push(asset);
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
                if (v.type === "participant") this.participants.push(new Participant(v));
            })
        }
    }
}

export = PUBGAPI;