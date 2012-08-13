/*
	Aaron Burke
	08/12/2012
	Project 3
	Making
*/

var hockeyTeam = function (name) {
	// Private
	var roster = [];
	var coach, player;
	// Accessors
	var getName = function () { return name; };
	var getCoach = function () { return coach; };
	var getPlayer = function () { return player; };
	var getRoster = function () {
		for (var i = 0, j = roster.length; i < j; i++) {
			console.log(roster[i] + " is on the team.");
		};
	};
	// Mutators
	var cutPlayer = function (player) {
		for (var i = 0, j = player.length; i < j; i++) {
			if (player[i] === "") {
				break;
			}
			else {
				var playerRemove = roster.indexOf(player[i]);
				if (playerRemove === -1) {
					console.log("Player not found.");
				}
				else {
					console.log(playerRemove);
					roster.splice(playerRemove,1);
				};
			};
		};
	};
	var addPlayer = function (player) {
		roster.push(player);
	};


	// Public methods
	return {
		"name": getName,
		"coach": getCoach,
		"player": getPlayer,
		"roster": getRoster,
		"cutPlayer": cutPlayer,
		"addPlayer": addPlayer

	};
};

