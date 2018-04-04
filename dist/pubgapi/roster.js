"use strict";
var PUBGAPI;
(function (PUBGAPI) {
    class Roster {
        constructor(data) {
            this.type = "roster";
            if (data.type !== this.type)
                throw new Error("Data isn't Roster's");
            this.id = data.id;
            this.attributes = data.attributes;
            this.relationships = data.relationships;
        }
    }
    PUBGAPI.Roster = Roster;
})(PUBGAPI || (PUBGAPI = {}));
module.exports = PUBGAPI;
