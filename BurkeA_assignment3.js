/*
	Aaron Burke
	08/12/2012
	Project 3
	Creating a Hockey Team with players
*/

var teams = [];  // Hold array of hockeyTeam objects created

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
		for (var ii = 0, jj = json.players.length; ii < jj; ii++){   // Loop through json object of players to find info
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
					//console.log(playerRemove);  // Debug usage to check index location
					roster.splice(playerRemove,1);
					console.log(player + " removed from " + name + " roster.");
				};
			};
		};
		return roster;
	};
	var addPlayer = function (player) {  // Function takes an array of player or players
		for (var i =0, j = player.length; i<j; i++) {
			roster.push(player[i]);
			console.log(player[i] + " added to " + name + " roster.");
		};
		return roster;
	};
	var playGame = function (homeTeam,awayTeam){
		var outCome = [];
		var hScore = Math.floor(Math.random()*11);
		var aScore = Math.floor(Math.random()*11);
		if (hScore > aScore) {
			console.log(hometeam + " won the game!");
		}
		else if (aScore > hScore) {
			console.log(awayTeam + " won the game!");
		} else {
			console.log("Game ended in a tie!");
		};
		outCome.push([homeTeam,hScore]);
		outCome.push([awayTeam,aScore]);
		return outCome;
	};

	// Public methods
	return {
		"getName": getName,     // Accessor
		"getCoach": getCoach,	// Accessor
		"getPlayer": getPlayer,	// Accessor
		"getRoster": getRoster,	// Accessor
		"cutPlayer": cutPlayer, // Mutator
		"addPlayer": addPlayer, // Mutator
		"playGame": playGame

	};
};


// Create Team
console.log("Time to create some Hockey Teams!");
var team1 = hockeyTeam("Ravens", "Joe Mann");
console.log(team1.getName() + " team created and the coach is " + team1.getCoach() + ".");
teams.push(team1);
var team2 = hockeyTeam("Black Hawks", "Sean Smith");
console.log(team2.getName() + " team created and the coach is " + team2.getCoach() + ".");
teams.push(team2);
console.log(" ");
// Add players to team
console.log("These teams needs some players!" + "\n" + "Lets add some to the rosters.");
team1.addPlayer(["Aaron Burke", "John Doe", "Bob Smith", "Mark Jones", "Bill Smith", "Robert White"]);
team2.addPlayer(["Jack Burke", "Jim Dole", "Ben Dover", "Mike Jones", "Matt Black", "Alex Sole"]);
console.log("Team 1's name is the " + team1.getName() + ".");
console.log("Here is the " + team1.getName()+ " roster: " + team1.getRoster() + ".");
console.log("Team 2's name is the " + team2.getName() + ".");
console.log("Here is the " + team2.getName()+ " roster: " + team2.getRoster() + ".");


team1.cutPlayer(["Bob Smith"]);
console.log(team1.getRoster());
//console.log(player1.name());
console.log(" ");
console.log(team1.getPlayer("Robert White",json));

