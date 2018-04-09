# Chumacera
[![Build Status](https://travis-ci.org/lm9/chumacera.svg?branch=master)](https://travis-ci.org/lm9/chumacera)
PUBG Dev API wrapper for nodejs.

## Install

```
$ npm install chumacera
```

## Usage

### Set a client

```js
const Chumacera = require("chumacera");
const client = new Chumacera.Client("<APIKEY>");
```

### Get players
```js
client.getPlayers(Chumacera.Shard.PC_JP, { names : ["<Name>"]})
.then(players => console.log(players));
```

### Get match
```js
players[0].relationships.matches[0].getMatch()
.then(match => console.log(match));
```

### Get telemetry
```js
match.getTelemetry()
.then(telemetry => console.log(telemetry));
```