const { Router } = require("express");
const api = Router();

// This will be your data source
const players = [
  { id: 1, name: "Jon Snow", age: 23, health: 100, bag: [1] },
  { id: 2, name: "Littlefinger", age: 35, health: 100, bag: [2] },
  { id: 3, name: "Daenerys Targaryen", age: 20, health: 100, bag: [3] },
  { id: 4, name: "Samwell Tarly", age: 18, health: 100, bag: [4] }
];
const objects = [
  { id: 1, name: "spoon", value: -1 },
  { id: 2, name: "knife", value: -10 },
  { id: 3, name: "sword", value: -20 },
  { id: 4, name: "potion", value: +20 }
];

// EXAMPLE ENDPOINT: LIST ALL OBJECTS
api.get("/objects", function(req, res) {
  res.json(objects);
});

//1. List all players.
api.get("/players", function(req, res) {
  res.json(players);
});

//2.Create player: adds a new player to data source.
api.post("/players", function(req, res) {
  let reqBody = req.body;
  if(!reqBody.name || !reqBody.age || !reqBody.health){
    res.status(400).send('Bad data format for new player');
  }
  else{
    reqBody.id = players.length+1;
    reqBody.bag = [];
    reqBody.health = 100;
    players.push(reqBody);
    res.json(reqBody);
  }
});

//3.Get player by id: returns the player for the given id.
api.get('/players/:playerId', function(req, res){
  const playerId = parseInt(req.params.playerId);
  console.log(playerId);
  const player = players.find(player => player.id === playerId);
  if(!player){
    res.status(404).send(`Player with id ${playerId} not found`)
  }
  else {
    res.json(player);
  }
});

module.exports = api;
