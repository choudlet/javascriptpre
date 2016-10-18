var name = "Chris";

if (name === "Chris") {
	console.log("Hey Chrissssy!")
	}
	
	else {
		console.log("Hi loser");
	}
	
for (var i = 3; i < 10000; i = i * 3) {
	console.log(i);
	}
	
var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

for (var i = 0; i < animals.length; i++) {
	console.log("Awesome " +animals[i] + "!")
};

var alphabet = "abcdefghijklmnopqrstuvwxyz";

var randomstring = "";

console.log(randomstring.length);

while (randomstring.length < 8) {
	var x = Math.floor(Math.random() * alphabet.length);
	randomstring += alphabet[x];
}

var input = "javascript is awesome";
var output = "";

for (var i = 0; i < input.length; i++) {
	if (input[i] === "a") {
		output += 4;
	} else if (input[i] === "i") {
		output += 1;
	} else if (input[i] === "o") {
		output += 0;
	} else {
	output += input[i];
	}
}

console.log(output);
