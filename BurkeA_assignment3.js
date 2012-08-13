/*
	Aaron Burke
	08/12/2012
	Project 3
	Creating a Hockey Team with players 
*/

var hockeyTeam = function (name, coach) {
	// Private
	var roster = [];
	var coach;
	// Accessors
	var getName = function () { return name; };
	var getCoach = function () { return coach; };
	var getPlayer = function (player) {
		for (var i =0, j = roster.length; i < j; i++){
			if (roster[i] === player.name(player)) {
				var playerInfo = roster[i] + " " + "age: " + player.age() + "\n" + player.born();
			}
		};
		if (playerInfo === undefined) {
			return playerInfo = "Player not on the roster.";
		} else {
			return playerInfo;
		};
	};
	var getRoster = function () { return roster; };

	// Mutators
	var cutPlayer = function (player) {   // player takes an array of player or players
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
	var addPlayer = function (player) {  // player takes an array of player or players
		for (var i =0, j = player.length; i<j; i++) {
			roster.push(player[i]);
		};
	};


	// Public methods
	return {
		"teamName": getName,
		"teamCoach": getCoach,
		"teamPlayer": getPlayer,
		"roster": getRoster,
		"cutPlayer": cutPlayer,
		"addPlayer": addPlayer

	};
};

var player = function (name, age, born, number, hand, position) {
	// Private
	// Accessors
	var getName = function () { return name; };
	var getAge = function () { return age; };
	var bornInfo = function () {
		var bornOutput = "Born in " + born[1] + ", " + born[2] + " on " + born[0] + ".";
		return bornOutput;
	};
	var playerNumber = function () {};
	var teamPlaysFor = function () {};
	// Public methods
	return {
		"name": getName,
		"age": getAge,
		"born": bornInfo,
		"playerNumber": playerNumber,
		"teamPlaysFor": teamPlaysFor
	};
};

// Create players
var player1 = player("Aaron Burke", 30, ["2-23-82","Lacrosse","WI"], 23, "center");
var player2 = player("John Doe", 24, ["5-13-88","Chicago","IL"], 5, "Left Wing");
var player3 = player("Bob Smith", 21, ["2-5-91","Baltimore","MD"], 12, "Right Wing");
var player4 = player("Mark Jones", 30, ["1-17-82","Ancorage","AK"], 2, "Goalie");
var player5 = player("Bill Smith", 20, ["2-23-90","St. Paul","MN"], 15, "Right Defense");
var player6 = player("Robert White", 28, ["7-20-84","Anarbor","MI"], 23, "Left Defense");
// Create Team
var ravens = hockeyTeam("Ravens", "Joe Mann");
// Add players to team
ravens.addPlayer(["Aaron Burke", "John Doe", "Bob Smith", "Mark Jones", "Bill Smith", "Robert White"]);

console.log(player1.age());
console.log(player1.born());
var ravens = hockeyTeam("Team 1");
ravens.addPlayer(["Aaron Burke", "John Doe", "Bob Smith", "Mark Jones", "Bill Smith", "Robert White"]);
console.log(ravens.roster());
ravens.cutPlayer(["Bob Smith"]);
console.log(ravens.roster());
console.log(player1.name());
console.log(" ");
console.log(ravens.teamPlayer(player1));
console.log(ravens.teamPlayer(player2));
console.log(ravens.teamPlayer(player3)); // Cut from team should not show up on roster
console.log(ravens.teamPlayer(player4));
console.log(ravens.teamPlayer(player5));
console.log(ravens.teamPlayer(player6));