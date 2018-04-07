namespace PUBGAPI {
    export class PlayerData {
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
            matches: {type: string, id: string}[];
        };
        readonly links: {
            shema?: string;
            self: string;
        }

        constructor(data: any) {
            if (data.type !== this.type) throw new Error("Data isn't Player's");
            this.id = data.id;
            this.attributes = data.attributes;
            this.relationships = {
                assets: data.relationships.assets.data,
                matches: (() => {
                    const matches: {type: string, id: string}[] = [];
                    data.relationships.matches.data.forEach((match: any) => {
                        matches.push({
                            id: match.id,
                            type: match.type
                        });
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