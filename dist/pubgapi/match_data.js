"use strict";
const participant_1 = require("./participant");
const roster_1 = require("./roster");
var PUBGAPI;
(function (PUBGAPI) {
    class MatchData {
        constructor(data, included) {
            this.type = "match";
            this.participants = [];
            this.rosters = [];
            if (data.type !== this.type)
                throw new Error("Data isn't Match's");
            this.id = data.id;
            this.attributes = data.attributes;
            this.relationships = data.relationships;
            this.links = data.links;
            included.forEach((v) => {
                if (v.type === "roster")
                    this.rosters.push(new roster_1.Roster(v));
                if (v.type === "participant")
                    this.participants.push(new participant_1.Participant(v));
            });
        }
    }
    PUBGAPI.MatchData = MatchData;
})(PUBGAPI || (PUBGAPI = {}));
module.exports = PUBGAPI;
