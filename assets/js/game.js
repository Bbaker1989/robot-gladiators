
var playerName = window.prompt ("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 50;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 10;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

// alert prompt to ask player if they want to fight or skip fight

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
// remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

} 


};

fight();