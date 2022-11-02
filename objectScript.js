
function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        //0 2 ++ / 0 3
        //1 2    / 1 3
        //       / 2 3
        var right = arr.length-1-left;
        //5-1-0=4 / 6-1-0=5
        //5-1-1=3 / 6-1-1=4
        //        / 6-1-2=3
        if(arr[left] != arr[right]) {
            //arr[0] != arr[4]
            //arr[1] != arr[3] not a pal-indrome
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);
//------------------------------------------------------------

var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}
console.log("----------------")
function revArray(arr){
    var result = arr.reverse();
    console.log(result)
}
revArray(['a','b','c'])
console.log("----------------")
//------------------------------------------------------------
var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();
    
console.log(floor);
console.log(ceiling);
console.log(random);
//------------------------------------------------------------
console.log("----------------")
function d6(arr) {
    
    var result = arr[Math.floor(Math.random() * arr.length)]
    return result;
}
    
var playerRoll = d6([1,2,3,4,5,6]);
console.log("The player rolled: " + playerRoll);

console.log("----------------")
//------------------------------------------------------------
function getAnswer(arry){
    var answers = arry[Math.floor(Math.random() * arry.length)];
    return answers;
}

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];
console.log("----------------")
var resul= getAnswer(lifesAnswers);
console.log("the answer is : " + resul);
//-----------------------------------------------------------------------------
var pokémon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];
console.log("----------------")
for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].id > 99) {
        console.log(pokémon[i].name);
    }
}
console.log("----------------")
//console.log the pokémon objects whose id is evenly divisible by 3
for(var i=0 ; i< pokémon.length;i++){
    if(pokémon[i].id%3 == 0){
        console.log(pokémon[i].name);
    }
}
console.log("----------------")
//console.log the pokémon objects that have more than one type
for(var i=0;i<pokémon.length;i++){
    if(pokémon[i].types.length >1){
        console.log(pokémon[i].name);
    }
}
console.log("----------------//console.log the names of the pokémon whose only type is poison")
//console.log the names of the pokémon whose only type is "poison"

//foreach
for(var poke1 of pokémon){
    
    if(  (  poke1.types.length == 1) && (poke1.types[0] == "poison") ){
        console.log(poke1.name);
    }
   
}

console.log("----------------another way to get the same answer of prequestuin")
for(var i=0;i<pokémon.length;i++){
    
    if(  (  pokémon[i].types.length == 1) && (pokémon[i].types[0] == "poison") ){
    console.log(pokémon[i].name);
}
}

console.log("----------------//the first type of all the pokémon whose second type is flying")
//the first type of all the pokémon whose second type is "flying"
for(var i=0;i<pokémon.length;i++){
    
    if( pokémon[i].types[1] == "flying"){
        console.log(pokémon[i].types[0]);
    }
}

console.log("----------------// console.log the reverse of the names of the pokémon whose only type is poison")
// console.log the reverse of the names of the pokémon whose only type is "poison"
var poisons = [];

for(var i=0;i<pokémon.length;i++){
    if( (pokémon[i].types.length == 1) && (pokémon[i].types[0] == "poison")){
        var nameOfObject= pokémon[i].name;
        poisons.push(nameOfObject);
    }
}
console.log(poisons.reverse());

console.log("---------------Nested Array")
// complete the following function
function flatten(arr) {
    var flat = [];
    for(var i =0;i<arr.length;i++){
        for(var j=0;j<arr[i].length;j++){
                flat.push(arr[i][j]);
            }
        }
return flat;
    }

    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

