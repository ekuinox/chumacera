namespace PUBGAPI {
    export class Participant {
        readonly type: string = "participant";
        readonly id: string;
        readonly attributes?: {
            actor: string;
            shardId: string;
            stats: any; 
        };
        constructor(data: any) {
            if (data.type !== this.type) throw new Error("Data isn't Participant's");
            this.id = data.id;
            if (data.attributes) {
                this.attributes = { 
                    actor: data.attributes.actor,
                    shardId: data.attributes.shardId,
                    stats: data.attributes.stats
                };
            }
            
        }
    }
}

export = PUBGAPI;