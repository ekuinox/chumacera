"use strict";
var PUBGAPI;
(function (PUBGAPI) {
    class Participant {
        constructor(data) {
            this.type = "participant";
            if (data.type !== this.type)
                throw new Error("Data isn't Participant's");
            this.id = data.id;
            this.attributes = data.attributes;
        }
    }
    PUBGAPI.Participant = Participant;
})(PUBGAPI || (PUBGAPI = {}));
module.exports = PUBGAPI;
