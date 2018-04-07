import { Client, TelemetryData } from "../app";
import fs from "fs-extra";

const APIKEY = JSON.parse(fs.readFileSync("./conf/key.json", "utf8"))["APIKEY"];

const client = new Client(APIKEY);

// 最近のキル数合計を返す
async function get_recent_stats(name: string, region: string = "pc-jp") {
	return new Promise<number>(async resolve => {
		let count:number = 0;
		let promises: Promise<number>[] = [];
		const players = await client.getPlayers(region, { names: [name]});

		players[0].relationships.matches.forEach(async _match => {
			promises.push(new Promise(resolve => resolve(kills_count(name, _match.id, region))));
		});

		Promise.all(promises)
		.then(kills_counts => {
			let kills_count = 0;
			kills_counts.forEach(n => {
				kills_count += n;
			});
			resolve(kills_count);
		});
	});
}

// マッチIDとかからキル数を返す
async function kills_count(name: string, id: string, region: string = "pc-jp") {
	return new Promise<number>(async resolve => {
		let counter:number = 0;
		const match = await client.getMatch(region, id);
		const telemetry = await match.assets[0].getTelemetry();
		telemetry.events.PlayerKill.forEach(event => {
			if (event.killer.name === name) {
				counter++;
			}
		});
		resolve(counter);
	});
	
}

get_recent_stats("lm0x", "pc-as")
.then(count => console.log(count));