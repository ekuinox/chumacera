"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const request_1 = __importDefault(require("request"));
const player_data_1 = require("./player_data");
const match_data_1 = require("./match_data");
var PUBGAPI;
(function (PUBGAPI) {
    class Client {
        constructor(api_key) {
            this.base_url = "https://api.playbattlegrounds.com";
            this.api_key = api_key;
        }
        get(api, params, raw) {
            return new Promise((resolve, reject) => {
                request_1.default.get({
                    url: `${this.base_url}/${api}`,
                    headers: {
                        "Authorization": this.api_key,
                        "Accept": "application/vnd.api+json"
                    },
                    qs: params
                }, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (raw) {
                            resolve(body);
                        }
                        else {
                            const parsed_result = JSON.parse(body);
                            if (parsed_result.errors)
                                reject(parsed_result.errors);
                            else
                                resolve(parsed_result);
                        }
                    }
                });
            });
        }
        getPlayer(id, region, raw) {
            return new Promise((resolve, reject) => {
                this.get(`shards/${region}/players/${id}`)
                    .then(result => {
                    try {
                        if (raw)
                            resolve(result);
                        else
                            resolve(new player_data_1.PlayerData(result.data));
                    }
                    catch (e) {
                        reject(e);
                    }
                }).catch(error => reject(error));
            });
        }
        getPlayers(region, filter, raw) {
            return new Promise((resolve, reject) => {
                const params = {};
                if (filter.names)
                    params["filter[playerNames]"] = filter.names.join(",");
                if (filter.ids)
                    params["filter[playerIds]"] = filter.ids.join(",");
                this.get(`shards/${region}/players/`, params)
                    .then((result) => {
                    if (raw) {
                        resolve(result);
                    }
                    else {
                        const players = [];
                        result.data.forEach((player) => {
                            try {
                                players.push(new player_data_1.PlayerData(player));
                            }
                            catch (e) {
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
        getMatch(id, region, raw) {
            return new Promise((resolve, reject) => {
                this.get(`shards/${region}/matches/${id}`)
                    .then(result => {
                    try {
                        if (raw)
                            resolve(result);
                        else
                            resolve(new match_data_1.MatchData(result.data, result.included));
                    }
                    catch (e) {
                        reject(e);
                    }
                }).catch(error => reject(error));
            });
        }
    }
    PUBGAPI.Client = Client;
})(PUBGAPI || (PUBGAPI = {}));
module.exports = PUBGAPI;
