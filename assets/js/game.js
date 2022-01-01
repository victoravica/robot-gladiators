/*                                *****************                        starting lesson code

var playerName = window.prompt("What is your robot's name?");
// Note the lack of quotation marks around playerName

console.log(playerName);

console.log("This logs a string, good for leaving yourself a message")

//This will do math and log 20
console.log(10 + 10);

//What is this?

console.log("The best robot ever is " + playerName);

console.log("The number on robot is " + playerName)

// just a function example  window.alert("This is an alert! Javascript is running!");

//to declare a function

function fight() {
    window.alert("The fight has begun!");
}

//to call a function

//fight();

*/

/*
                                ***********************                     two ways to declare a function
    Function Declaration
Function declaration: This is when we create a function using the function keyword first. 
The following code shows an example:

// create function
function fight() {
  window.alert("Welcome to Robot Gladiators!");
}
// execute function
fight();

    Function Expression
Function expression: This is when we create a function by assigning it to a variable. 
The following code shows an example:

// create function
var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
};
// execute function
fight();

*/

var playerName = window.prompt("What is your robot's name?"); // 1️⃣ first thing is to ask what your player name is
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//              ***************               2️⃣  fight function is the second thing that will run 
var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to the Robot Gladiators!"); //         ❕💨   second window that will appear

    //Ask the player is they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'); // ❕💨 third window 

    //if player choses to fight, fight
    if (promptFight ==="fight" || promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack; //remove enemy's health by subtracting the amount set in the playerAttack variable
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + "now has " + enemyHealth + " health remaining."
        );

        //                  *******************                 ❕💨              check enemy's health and give update
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!"); 
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player chooses to skip 
    }   else if (promptFight === 'skip' || promptFight === 'SKIP') {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
            window.alert(playerName + " now has " + playerMoney + " gil left.");
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
        // if player did not choose 1 or 2 in prompt
    } else {
        window.alert("You need to pick a valid option. Try again!");
    }
};

// run fight function to start game
fight()

    