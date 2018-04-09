import axios from "axios";
import { TelemetryData, Client } from "../app";

namespace PUBGAPI {
    export class Asset {
        private client: Client;
        readonly type: string = "asset";
        readonly id: string;
        readonly attributes: {
            URL: string;
            createdAt: string;
            description: string;
            name: string;
        };
        
        constructor(client: Client, data: any) {
            this.client = client;
            if (data.type !== this.type) throw new Error("Data isn't Asset's");
            this.id = data.id;
            this.attributes = {
                URL: data.attributes.URL,
                createdAt: data.attributes.createdAt,
                description: data.attributes.description,
                name: data.attributes.name
            };
        }

        public getTelemetry(username?: string) {
            return this.client.getTelemetry(this.attributes.URL, username);
        }
    }
}

export = PUBGAPI;