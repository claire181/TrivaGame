// Psuedo Code: 
// Game will display 10 baseball trivia questions with 4 multiple choice options.
// Timer will count down once the start button is pressed. 
// Game will end once there is a selection for every answer OR if the time runes out. 
// Questions correctly answered, incorrectly answered will be displayed at the end of the game. 

$('#start').on('click', function(){
	$('#subwrapper').remove();
})

var questions = [{
	question: "Who is the only active MLB player that once played for the Montreal Expos?",
	answers:["Bartolo Colon", "Joaquin Benoit", "R.A. Dickey", "Jason Grilli"],
	correctAnswer: "Bartolo Colon"
}, {
	question: "Who's record of most consecutive games of baseball did Cal Ripken, Jr. break on September 6, 1995?",
	answers:["Babe Ruth", "Roger Maris", "Lou Gehrig", "Joe DiMaggio"],
	correctAnswer:
}, {
	question: "What 1929 feat did Lee Richmond perform in a Major League Baseball first?",
	answers:["He stole home.", "He pitched a perfect game.", "He had an unassisted triple play.", "He hit a grand slam."],
	correctAnswer: "He pitched a perfect game."
}, {
	question: "Jackie Robinson is the only player in MLB histor to have their number retired by all teams. What was his number?",
	answers:["24", "12", "34", "42"],
	correctAnswer: "42"
}, {
	question: "What is the oldest active ball park in Major League Baseball?",
	answers:["Fenway Park", "Wrigley Field", "Dodger Stadium", "Camden Yards"],
	correctAnswer: "Fenway Park"
}, {
	question: "Which former baseball broadcaster won the Presidential Medal of Freedom in 2016?",
	answers:["Harry Carey", "Vin Scully", "Joe Garagiola", "John Sterling"],
	correctAnswer: "Vin Scully"
}, {
	question: "Which team held the infamous 'Ten Cent Beer Night' promotion on June 4, 1974?",
	answers:["Cleveland Indians", "Texas Rangers", "Cincinnati Reds", "Chicago White Sox"],
	correctAnswer: "Cleveland Indians"
}, {
	question: "Which MLB player was the first to brake Roger Maris' single season homerun record in 1998?",
	answers:["Barry Bonds", "Sammy Sosa", "Mark McGwire", "Ken Griffey, Jr."],
	correctAnswer: "Mark McGwire"
}, {
	question: "Where is the National Baseball Hall of Fame & Museum located",
	answers:["Cooperstown, NY", "Cleveland, OH", "Detroit, MI", "Canton, OH"],
	correctAnswer: "Cooperstown, NY"
}, {
	question: "Where was the first Major League Baseball All-Star Game played?",
	answers:["New York, NY", "St. Louis, MO", "Washington, D.C.", "Chicago, IL"],
	correctAnswer: "Chicago, IL"
}];