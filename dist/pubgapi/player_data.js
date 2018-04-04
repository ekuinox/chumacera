"use strict";
var PUBGAPI;
(function (PUBGAPI) {
    class PlayerData {
        constructor(data) {
            this.type = "player";
            if (data.type !== this.type)
                throw new Error("Data isn't Player's");
            this.id = data.id;
            this.attributes = data.attributes;
            this.relationships = data.relationships;
            this.links = data.links;
            this.links = data.links;
        }
    }
    PUBGAPI.PlayerData = PlayerData;
})(PUBGAPI || (PUBGAPI = {}));
module.exports = PUBGAPI;
