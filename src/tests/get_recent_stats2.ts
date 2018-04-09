import { Client, Participant, Roster, Shard, MatchData } from "../app";
import fs from "fs-extra";

const APIKEY = JSON.parse(fs.readFileSync("./conf/key.json", "utf8"))["APIKEY"];

const client = new Client(APIKEY);

const username = process.argv[2] ? process.argv[2] : "lm0x";

const shard = process.argv[3] ? process.argv[3] : Shard.PC_JP;

// マッチ参加者としての情報を抜き出すサンプル
(async () => {
	client.getPlayers(shard, {names: [username]})
	.then(res => {
		for (const m of res[0].relationships.matches) {
			m.getMatch()
			.then(match => {
				const stats = get_stats_from_match(match);
	
				if (!stats) return;
	
				console.log(`
match: {completion: ${match.attributes.created_at}, shard: ${match.attributes.shard_id}, mode: ${match.attributes.game_mode}, id: ${match.id}}
name: ${stats.participant.name}
kills: ${stats.participant.kills}
rank: ${stats.roster.rank}
walked: ${stats.participant.walk_distance}
rode: ${stats.participant.ride_distance}
				`);
			});
		}
	})
	.catch(e => console.log(e));
})();

// Participantの配列からusernameに合ったParticipanを返す
function search_participant_by_username(participants: Participant[], username: string) {
	for (const participant of participants) {
		if (participant.attributes && participant.attributes.stats.name === username)
			return participant;
	}
}

// Roster配列からparticipantが所属しているRosterを探して返す
function search_roster_by_participant(rosters: Roster[], _participant: Participant) {
	for (const roster of rosters) {
		if (!roster.relationships) break;
		for (const participant of roster.relationships.participants) {
			if (_participant.id === participant.id) return roster;
		}
	}
}

// MatchDataからいい感じにStatsを返す
function get_stats_from_match(match: MatchData) {
	const participant = search_participant_by_username(match.participants, username);
			
	if (!participant) return;

	const roster = search_roster_by_participant(match.rosters, participant);

	if (!roster) return;

	return {roster: roster.attributes.stats, participant: participant.attributes.stats};
}