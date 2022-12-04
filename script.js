// variables
let hand = ["rock", "paper", "scissors"];

let player = document.querySelector("#player");
let cpu = document.querySelector("#cpu");
let total = document.querySelector("#total");

let playerPoints = 0;

// check
console.log(player);
console.log(cpu);
console.log(total);

// functions
function playerRandom() {
 let pick = Math.floor(Math.random() * 3);
 player.textContent = hand[pick];
}