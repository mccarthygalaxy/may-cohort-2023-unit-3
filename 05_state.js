//! Lookup Tables
// Dictionaries

const listGames = system => {

    let collection = {
        "Nintendo": ['Duck Hunt', "The Legend of Zelda", "Super Mario Bros."],
        "Super Nintendo": ["Super Mario World", "F-Zero", "Star Fox"],
        "Nintendo 64": ["Super Mario 64", "Mario Kart 64", "GoldenEye 007"]
    }

    // collection['Nintendo 64']
    // collection['Nintendo']
    return collection[system];
}

//or... 
let mySearchTerm = listGames('Nintendo 64');
console.log(mySearchTerm);
// console.log(listGames('Nintendo 64'));
// console.log(listGames('Nintendo'));

const stateAbbreviation = {
    alaska: "ak",
    delaware: "de",
    hawaii: "hi",
    indiana: "in",
    vermont: "vt"
};

const acronyms = {
    asap: "as soon as possible",
    fomo: "fear of missing out",
    gif: "graphics interchange format",
    lol: "laughing out loud"
};

function findIt(dict, search) {
    let results = dict[search];
    return results;
}

console.log(findIt(stateAbbreviation, 'hawaii'));
console.log(findIt(acronyms, 'lol'));

//! State Machine
let lights = {
    green: ['yellow'],
    yellow: ['red'],
    red: ['green','yield'],
    yield: ['red']
}

let currentState = 'green';

function enterState(newState) {
    /* 
        1. Checking the object for the currentState - What is it now? "green"
        2. Asking, does the user input (parameter) match or include any of the values within that array (currentState: [array]);
            2a: If so:
                - Change currentState to the user input (parameter)
                - return value / response / etc.
            2b: If not:
                - Provide or return an error OR a different response
    */
   
    let valid = lights[currentState]; // lights['green'] Est. which point in our state object that we want to reference.

    if(valid.includes(newState)){
        currentState = newState; // Allows state to change.
        console.log(currentState);
    } else {
        throw(`Invalid State: ${currentState} to ${newState}`);
        // throw exits throws and error and exits
    }
}

enterState('yellow');
enterState('red');
enterState('green');
// enterState('red');
