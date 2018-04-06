import { Client } from "../app";
import fs from "fs-extra";

const APIKEY = JSON.parse(fs.readFileSync("./conf/key.json", "utf8"))["APIKEY"];

const client = new Client(APIKEY);

(async () => {
	client.getPlayers("pc-as", {names: ["lm0x"]})
	.then(players => {
		console.log("pc-as", players[0].relationships.matches[0].id);
		client.getMatch("pc-as", players[0].relationships.matches[0].id)
		.then(match => {
			console.log(match.relationships.assets);
		});
	}).catch(e => console.log(e));
})();
