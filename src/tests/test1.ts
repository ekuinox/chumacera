import { Client } from "../app";
import fs from "fs-extra";

const APIKEY = JSON.parse(fs.readFileSync("./conf/key.json", "utf8"))["APIKEY"];

const client = new Client(APIKEY);

(async () => {
	client.get("shards/pc-as/matches/447ef3e9-ee54-4791-9549-b9cf1b951b28", {}, true)
	.then(res => {
		console.log(res);
	})
	/*
	client.getPlayers("pc-as", {names: ["lm0x"]})
	.then(players => {
		client.getMatch("pc-as", players[0].relationships.matches[0].id)
		.then(match => {
			console.log(match.assets);
		});
	}).catch(e => console.log(e));
	*/
})();
