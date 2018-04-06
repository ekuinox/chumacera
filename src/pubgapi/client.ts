import axios from "axios";
import qs from "qs";
import { PlayerData } from "./player_data";
import { MatchData } from "./match_data";
import { TelemetryData } from "./telemetry_data";

namespace PUBGAPI {
	export class Client{
		private base_url = "https://api.playbattlegrounds.com";
		private api_key: string;
		constructor(api_key: string) {
			this.api_key = api_key;
		}

		public get(url: string, params?: any, raw?: boolean) {
			const headers: any = { "Accept": "application/vnd.api+json" };
			if (url.match(/api\.playbattlegrounds\.com/)) headers["Authorization"] = this.api_key;
			return new Promise<any>((resolve, reject) => {
				if (params) url += `?${qs.stringify(params)}`;
				axios.get(url, { headers: headers})
				.then(res => {
					resolve(raw ? JSON.stringify(res.data) : res.data);
				}).catch(e => {
					if (e.response.data.errors) reject(e.response.data.errors);
					else reject(e.statusText);
				});
			});
		}

		// Playerを1件引っ張ってくる
		public getPlayer(id: string, region: string): Promise<PlayerData>;
		public getPlayer(id: string, region: string, raw: boolean): Promise<any>
		public getPlayer(id: string, region: string, raw?: boolean) {
			return new Promise<PlayerData>((resolve, reject) => {
				this.get(`${this.base_url}/shards/${region}/players/${id}`)
				.then(result => {
					try {
						if (raw) resolve(result);
						else resolve(new PlayerData(result.data));
					} catch (e) {
						reject(e);
					}
				}).catch(error => reject(error));
			});
		}

		// フィルタによってPlayerを複数件引っ張ってくる
		public getPlayers(region: string, filter: {names?: string[], ids?: string[]}): Promise<PlayerData[]>;
		public getPlayers(region: string, filter: {names?: string[], ids?: string[]}, raw: boolean): Promise<any>;
		public getPlayers(region: string, filter: {names?: string[], ids?: string[]}, raw?: boolean) {
			return new Promise<PlayerData[]>((resolve, reject) => {
				const params: {[key: string]: string} = {};
				if (filter.names) params["filter[playerNames]"] = filter.names.join(",");
				if (filter.ids) params["filter[playerIds]"] = filter.ids.join(",");
				this.get(`${this.base_url}/shards/${region}/players/`, params)
				.then((result) => {
					if (raw) {
						resolve(result);
					} else {
						const players:PlayerData[] = [];
						result.data.forEach((player: any) => {
							try {
								players.push(new PlayerData(player));
							} catch (e) {
								reject(e);
							}
						});
						resolve(players);
					}
				}).catch((error) => {
					reject(error);
				});

			});
		}

		// マッチを1件引っ張ってくる
		public getMatch(region: string, id: string): Promise<MatchData>;
		public getMatch(region: string,id: string, raw: boolean): Promise<any>
		public getMatch(region: string, id: string, raw?: boolean) {
			return new Promise<MatchData | any>((resolve, reject) => {
				this.get(`${this.base_url}/shards/${region}/matches/${id}`)
				.then(result => {
					try {
						if (raw) resolve(result);
						else resolve(new MatchData(result.data, result.included));
					} catch (e) {
						reject(e);
					}
				}).catch(error => reject(error));
			});
		}

		// Telemetry from url
		public getTelemetry(url: string) {
			return new Promise<MatchData | any>((resolve, reject) => {
				this.get(url)
				.then(result => {
					try {
						resolve(new TelemetryData(result));
					} catch (e) {
						reject(e);
					}
				}).catch(error => reject(error));
			});
		}
	}
}

export = PUBGAPI;