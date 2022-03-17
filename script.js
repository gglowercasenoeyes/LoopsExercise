for ( i=1; i<=7; i++){
    console.log(i);
};
console.log(`========`);
for (i=5; i<=25; i+=4){
    console.log(i);
}
const wizards = [
    `Harry Potter`, 
    `Hermione Granger`, 
    `Ron Weasley`
]
for (list of wizards){
    console.log(list);
};
let harryPotterMovies = 0
while (harryPotterMovies <  8){
    console.log(harryPotterMovies);
    harryPotterMovies++;
};
console.log(harryPotterMovies);
// BONUS
const hogwartsHouses = [
    `gryffindor`, 
    `Hufflepuff`,
    `Slytherin`, 
    `Ravenclaw`
]
for (category of hogwartsHouses){
    for (types of category){
        console.log(types); 
    }
    console.log(`==========`);
}
const quote = [`yer`, `a`, `wizard`, `Harry`];

// console.log(...quote);
// let hagridQuote = quote.join(' ');
// console.log(hagridQuote);
let magicQuote = ``;
for (i=0; i < quote.length; i++){
    magicQuote += ` ${quote[i]}`
};
magicQuote = magicQuote.trim();
console.log(magicQuote);

for (i=1; i<26; i++){
    if ( (i % 3 === 0) && (i % 5 === 0)){
        console.log(`EXPECTO PATRONUM!!!!!!!!`);
    } else if (i % 5 === 0){
        console.log(`....Patronum....`);
    } else if (i % 3 === 0){
        console.log(`Expecto...`);
    } else {
        console.log(i);
    }
}
    