"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../pubgapi/client");
const fs_extra_1 = __importDefault(require("fs-extra"));
const APIKEY = JSON.parse(fs_extra_1.default.readFileSync("./conf/key.json", "utf8"))["APIKEY"];
const client = new client_1.Client(APIKEY);
(async () => {
    client.get("shards/pc-jp/matches/52ac10e4-b0b7-497d-83c1-5e41bcd1efb6", {}, true)
        .then(r => {
        fs_extra_1.default.writeFileSync("./samples/matches{id}", r);
    }).catch(e => console.log(e));
})();
