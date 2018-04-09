import { Client, MatchData } from "../app";

namespace PUBGAPI {
    export class MatchFewData {
        private client: Client;
        readonly type: string;
        readonly id: string;
        readonly shard_id: string;

        constructor(client: Client, type: string, id: string, shard_id: string) {
            this.client = client;
            this.type = type;
            this.id = id;
            this.shard_id = shard_id;
        }

        public getMatch() {
            return this.client.getMatch(this.shard_id, this.id);
        }
    }

    export class PlayerData {
        private client: Client;
        readonly type: string = "player";
        readonly id: string;
        readonly attributes: {
            createdAt: string;
            name: string;
            patchVersion?: string;
            shardId: string;
            stats?: any;
            titleId: string;
            updatedAt: string;            
        };
        readonly relationships: {
            assets: any[];
            matches: MatchFewData[];
        };
        readonly links: {
            shema?: string;
            self: string;
        }

        constructor(client: Client, data: any) {
            this.client = client;
            if (data.type !== this.type) throw new Error("Data isn't Player's");
            this.id = data.id;
            this.attributes = data.attributes;
            this.relationships = {
                assets: data.relationships.assets.data,
                matches: (() => {
                    const matches: MatchFewData[] = [];
                    data.relationships.matches.data.forEach((match: any) => {
                        matches.push(new MatchFewData(this.client, match.type, match.id, this.attributes.shardId));
                    });
                    return matches;
                })()
            };
            this.links = data.links;
            this.links = data.links;
        }
    }
}

export = PUBGAPI;