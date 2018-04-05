# Chumacera
[![Build Status](https://travis-ci.org/lm9/chumacera.svg?branch=master)](https://travis-ci.org/lm9/chumacera)
PUBG Dev API wrapper for nodejs.

## Install

```
$ npm install chumacera
```

## Usage
```js
const Chumacera = require("chumacera");
const client = new Chumacera.Client("<APIKEY>");
client.getPlayers("pc-jp", { names : "<Name>"})
.then(players => console.log(players));
```