/*
	Aaron Burke
	08/12/2012
	Project 3
	Creating a Hockey Team with players
*/

var hockeyTeam = function (name, coach) {
	// Private
	var roster = [];
	
	// Accessors
	var getName = function () { return name; };
	var getCoach = function () { return coach; };
	var getPlayer = function (player,json) {     // Takes a player name and JSON data from json.js
		var playerInfo;
		for (var i =0, j = roster.length; i < j; i++){ // loop to see if player is on roster if found break and move on
			//console.log("got here"); // Debug check on loop
			//console.log(roster[i]);  // Debug check on loop
			if (roster[i] === player){
				break;
			};
		};
		if (roster[i] === undefined) {
			playerInfo = "Player not on roster.";
			return playerInfo;
		};
		for (var ii = 0, jj = json.players.length; ii < jj; ii++){   // Loop through JSON object of players to find info
			//console.log("got here also");  // Debug check on loop
			var play = json.players[ii];
			//console.log(play.name + " " + roster[i]);  // Debug check on loop
			if (roster[i] === play.name) {
				playerInfo = play.name + " " + "age: " + play.age + "\n" + play.born[0] + " " + play.born[1] + "," + play.born[2];
				return playerInfo;
			};
		};
	};
	var getRoster = function () { return roster; };

	// Mutators
	var cutPlayer = function (player) {   // Function takes an array of player or players
		for (var i = 0, j = player.length; i < j; i++) {
			if (player[i] === "") {
				break;
			} else {
				var playerRemove = roster.indexOf(player[i]);
				if (playerRemove === -1) {
					console.log("Player not found.");
				} else {
					console.log(playerRemove);
					roster.splice(playerRemove,1);
				};
			};
		};
	};
	var addPlayer = function (player) {  // Function takes an array of player or players
		for (var i =0, j = player.length; i<j; i++) {
			roster.push(player[i]);
		};
	};


	// Public methods
	return {
		"getName": getName,     // Accessor
		"getCoach": getCoach,	// Accessor
		"getPlayer": getPlayer,	// Accessor
		"getRoster": getRoster,	// Accessor
		"cutPlayer": cutPlayer, // Mutator
		"addPlayer": addPlayer  // Mutator

	};
};


// Create Team
var ravens = hockeyTeam("Ravens", "Joe Mann");
// Add players to team
ravens.addPlayer(["Aaron Burke", "John Doe", "Bob Smith", "Mark Jones", "Bill Smith", "Robert White"]);
console.log(ravens.getName());

console.log(ravens.getRoster());
ravens.cutPlayer(["Bob Smith"]);
console.log(ravens.getRoster());
//console.log(player1.name());
console.log(" ");
console.log(ravens.getPlayer("Robert White",json));
