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
 
 // cpu hand
 cpuRandom();

 if ((player.textContent === hand[0] && cpu.textContent === hand[2]) || (player.textContent === hand[1] && cpu.textContent === hand[0]) || (player.textContent === hand[2] && cpu.textContent === hand[1])) {
  playerPoints += 1;
 } else if ((player.textContent === hand[2] && cpu.textContent === hand[0]) || (player.textContent === hand[0] && cpu.textContent === hand[1]) || (player.textContent === hand[1] && cpu.textContent === hand[2])) {
  playerPoints -= 1;
 } else {
  playerPoints += 0;
 }

 total.textContent = `total: ${playerPoints}`

 if (playerPoints === 5) {
  total.textContent = `YOU WIN!`;
  playerPoints = 0
 } else if (playerPoints === -5) {
  total.textContent = `YOU LOSE`;
  playerPoints = 0
 }
}

function cpuRandom() {
 let pick = Math.floor(Math.random() * 3);
 cpu.textContent = hand[pick];
}