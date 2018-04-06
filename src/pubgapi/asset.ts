namespace PUBGAPI {
    export class Asset {
        readonly type: string = "asset";
        readonly id: string;
        readonly attributes: {
            URL: string;
            createdAt: string;
            description: string;
            name: string;
        };
        constructor(data: any) {
            if (data.type !== this.type) throw new Error("Data isn't Asset's");
            this.id = data.id;
            this.attributes = {
                URL: data.attributes.URL,
                createdAt: data.attributes.createdAt,
                description: data.attributes.description,
                name: data.attributes.name
            };
        }
    }
}

export = PUBGAPI;