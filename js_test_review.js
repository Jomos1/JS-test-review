//Jomari Jacinto 11/23/2016 TITLE: Javascript Test Review

var knight = "Arthur";
var maiden = "Guinevere";
var monster = "Griffin";
var weaponChest = ["Mace", "Sorcerer's Stone", "Excalibur"];
var wizard = "Merlin";
var power = 45;

function swordInTheStone(worthy){
	if (worthy == "Arthur"){
		console.log("We have found our King " + worthy);
	}
	else console.log("We must keep searching for " + worthy+ "is unworthy.");
}

swordInTheStone(knight)

//HAILT THE KING AND QUEEN!
function trueLove(king, queen){
	if (queen == "Guinevere" && king == "Arthur"){
		console.log("On this day, our benevolent rulers " + king + " and " + queen + " shall rule happily ever after!")
	}
	else console.log("We must keep, searching for true love must reign over Camelot")
}

trueLove(knight, maiden)

//MERLIN AND MUNSTAH

function epicBattle(wizard,enemy,power){
	if (power <= 15){
		console.log("Our " + wizard + " has fallen! a.k.a. 'he ded'")
	}
	else if (power <= 40 && 16){
		console.log(wizard + " has almost slain the " + enemy)
	}
	else console.log("Our " + wizard + " has slain the " + enemy)
}
epicBattle(wizard,monster,power)

//I DO GOOD? []YES []NO
//WYZAARD