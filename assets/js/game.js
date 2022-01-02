
window.alert("Welcome to the Robot Gladiators!");

var playerName = window.prompt("What is your robot's name?"); // 1️⃣ first thing is to ask what your player name is
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
// console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
/*
console.log(enemyNames);                            // to print to console this array (how many elements and what they are)
console.log(enemyNames[0]);                         // to print to console what element is at this position in the index
console.log(enemyNames.length);                     // prints how many elements in array
console.log(enemyNames[enemyNames.length - 1]);     // prints last element in array
*/
/*
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
  }
*/


//              ***************               2️⃣  fight function is the second thing that will run 
var fight = function(enemyNames) {
    // repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0) {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'); // ❕💨 third window 

    //if player choses to fight, fight
    if (promptFight ==="fight" || promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack; //remove enemy's health by subtracting the amount set in the playerAttack variable
        console.log(
            playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );

        //                  *******************                 ❕💨              check enemy's health and give update
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died!");
        } else {
            window.alert(enemyNames + " has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
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
    }    // place fight function code block here 
    }
    
};

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i]; // added this var to move onto the next enemy
    enemyHealth = 50;
    fight(pickedEnemyName);
  }

    