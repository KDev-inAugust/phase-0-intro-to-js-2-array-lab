// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

function appendCat(name){
    const newCats = [...cats, name];
    return newCats;
}

function prependCat (name){
    const newCatsTwo=[name, ...cats];
    return newCatsTwo;
}

function removeLastCat (){
    const newCatsThree = [...cats];
    newCatsThree.pop();
    return newCatsThree;
}

function removeFirstCat(){
    const newCatsFour = [...cats];
    newCatsFour.shift();
    return newCatsFour
}