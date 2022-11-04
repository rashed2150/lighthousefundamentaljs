let captain = "Mal";
let second = "Zoe";
let pilot = "Wash";
let companion = "Inara";
let mercenary = "Jayne";
let mechanic = "Kaylee";


let crew = [captain, second, pilot, companion, mercenary, mechanic];

// Another method
// var crew = [captain, second, pilot, companion, mercenary, mechanic];

// Print
for (x in crew){
  console.log(crew[x])
}

console.log(crew);

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

for (var index = 0; index<prices.length; index++){
  //change the value of first element
  if(index===0){
      prices[index]=11;
  }
  //change the value of third element
  else if(index===2){
      prices[index]=33;
  }
  //change the value of seventh element
  else if(index===6){
      prices[index]=77;
  }
}
console.log(prices);

function cad (x,y){
  return x/y
}
console.log(Math.floor(cad(4000000,80)))
console.log(Math.floor(cad(4000000,80)/12))

let donuts = ["glazed", "glazed cruller", "cinnamon sugar", "sprinkled"];
donuts.push('powdered');
console.log(donuts);

let rainbow = ["Red", "Orange", "Blackberry", "Blue"];
rainbow.splice(2,1, "Yellow" , "Green", "Purple")
console.log(rainbow)


let team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(x) {
    if (x.length >= 7)
        return true; // true is a boolean value. Do not return a string "true"
    else 
        return false; // false is also a boolean value. Do not return a string "false"
}
console.log(hasEnoughPlayers(team));

/*let captain = "Mal";
let second = "Zoe";
let pilot = "Wash";
let companion = "Inara";
let mercenary = "Jayne";
let mechanic = "Kaylee";*/

//let crew = [captain, second, pilot, companion, mercenary, mechanic];
crew.push("Simon");
crew.push("River") ;
crew.push("Book");
console.log(crew)

let bills = [50.23, 19.12, 34.01, 100.11, 12.15,];

let totals = bills.map(function (element) {
  element *= 1.15;
  element = element.toFixed(2);
  //element = Number(element);

  return element;
});
console.log(totals)

let numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for(var i=0; i<numbers.length; i++){

  // Let j represents the length of a sub-array 
  for(var j=0; j<numbers[i].length; j++){
      if(numbers[i][j]%2===0)
          numbers[i][j]="even";
      else
          numbers[i][j]="odd";
  }
}

// Print the final array
console.log(numbers);














