/*
	Aaron Burke
	08/12/2012
	Project 3
	Creating a Hockey Team with players
*/

var teams = [];  // Holds an array of hockeyTeam objects created

// Constructor 
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
				playerInfo = play.name + " - " + "Age: " + play.age + " - " + "Born: " + play.born[0] + " in " + play.born[1] + "," + play.born[2]
					+ "\n" + "Position: " + play.position + " - " + "Shoots: " + play.hand;
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
	var playGame = function (homeTeam,awayTeam){    // Game simulation every play has a different outcome
		var outCome = [];
		var hScore = Math.floor(Math.random()*8);
		var aScore = Math.floor(Math.random()*8);
		if (hScore > aScore) {
			console.log(homeTeam + " won the game!");
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
	var playedCollege  = function () {
		var collegePlayers;
		for (var i = 0, j = roster.length; i < j; i++){
			for (var ii = 0, jj = playerData.players.length; ii < jj; ii++){
				var play = playerData.players[ii];
				if ((roster[i] === play.name) && (play.playedCollege === true)) {
					collegePlayers = true
					break;
				} else if ((roster[i] === play.name) && (play.playedCollege === false)) {
					break;
				};
			};
		};
		return collegePlayers;
	};

	// Public methods
	return {
		"getName": getName,     // Accessor
		"getCoach": getCoach,	// Accessor
		"getPlayer": getPlayer,	// Accessor
		"getRoster": getRoster,	// Accessor
		"cutPlayer": cutPlayer, // Mutator
		"addPlayer": addPlayer, // Mutator
		"playGame": playGame,
		"haveCollegePlayers": playedCollege

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
console.log(" ");
team1.addPlayer(["Aaron Burke", "John Doe", "Bob Smith", "Mark Jones", "Bill Smith", "Robert White"]);
console.log(" ");
team2.addPlayer(["Jack Burke", "Jim Dole", "Ben Dover", "Mike Jones", "Matt Black", "Alex Sole"]);
console.log(" ");
// View the rosters
console.log("Team 1's name is the " + team1.getName() + ".");
console.log("Here is the " + team1.getName()+ " roster: " + team1.getRoster() + ".");
console.log("Do the " + team1.getName() + " have any former college players?");
if (team1.haveCollegePlayers() === true){
	console.log("Yes they do.");
} else {
	console.log("No they do not.");
};

console.log(" ");
console.log("Team 2's name is the " + team2.getName() + ".");
console.log("Here is the " + team2.getName()+ " roster: " + team2.getRoster() + ".");
console.log("Do the " + team2.getName() + " have any former college players?");
if (team2.haveCollegePlayers() === true){
	console.log("Yes they do.");
} else {
	console.log("No they do not.");
};
console.log(" ");
// Cut some players
console.log("Looks like we need to cut some players before the big game.");
team1.cutPlayer(["Bob Smith"]);
team2.cutPlayer(["Matt Black"]);
console.log(" ");
// Pickup some new players 
console.log("Time to pick up some better help.")
team1.addPlayer(["Joe Best"]);
team2.addPlayer(["Mark Good"]);
console.log(" ");
// Get the new players info
console.log("Lets find out some info about our new players.");
console.log(team1.getPlayer("Joe Best",playerData));
console.log(team2.getPlayer("Mark Good",playerData));
console.log(" ");
// Simulate a game - refresh to play it again with a new random outcome
var outCome = team1.playGame(team1.getName(),team2.getName());
console.log("Game score: " + outCome[0][0] + " - " + outCome[0][1] + " : " + outCome[1][0] + " - " + outCome[1][1]);
console.log(" ");
team1.haveCollegePlayers();



