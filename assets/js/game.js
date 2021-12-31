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

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this


var enemyName = "Griffith";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
    enemyHealth = enemyHealth - playerAttack; // enemyHealth takes damage from attack


    // Log a resulting message to the console so we know that it worked.

    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!")
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    //check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

fight();