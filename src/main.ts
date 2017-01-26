console.log("Hello world");

// var command = require('find-exec')(["cmdmp3"]);
// console.log(command);


import PlayerFactory from "audio/PlayerFactory";
const factory = new PlayerFactory();
const player = factory.Create();
player.play("./assets/birds.mp3");

setTimeout(() => player.stop(), 10000);
