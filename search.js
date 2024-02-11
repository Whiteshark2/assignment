// list actor with their films

const actors = [
    { name: "Ranbir Kapoor", movies: ["Rockstar",
    "Barfi!","Tamasha","Sanju","Yeh Jawaani Hai Deewani"] },
    { name: "Akshay Kumar", movies: ["Padman",
        "Kesari","Housefull 4","Good Newwz",
        "Sooryavanshi"] },
    { name: "Salman Khan", movies: ["Dabangg",
    "Bajrangi Bhaijaan",
    "Sultan",
    "Kick",
    "Tiger Zinda Hai"] },
    { name: "Shah Rukh Khan", movies: ["Dilwale Dulhania Le Jayenge",
    "Kuch Kuch Hota Hai",
    "My Name Is Khan",
    "Chennai Express",
    "Devdas"] },
    { name: "Amitabh Bachchan", movies: ["Sholay",
    "Deewaar",
    "Don",
    "Zanjeer",
    "Paa"] }
];

//function to find actor by their movie name
function findActorsByMovieName(movieName) {
    
    const matchingActors = [];
    
  // traverse through each and match their films
    actors.forEach(actor => {
        if (actor.movies.includes(movieName)) {
            matchingActors.push(actor.name);
        }
    });
    
  // if not actor found return empty message
    if (matchingActors.length === 0) {
        return `No actors found for the movie "${movieName}"`;
    }
    
    return matchingActors;
}

// function to find movie by actor
function findMoviesByActorName(actorName) {
    const actor = actors.find(actor => actor.name === actorName);
    if (!actor) {
        return `No movies found for actor "${actorName}"`;
    }
    
    return actor.movies;
}

//calling each function 
console.log(findActorsByMovieName("Bajrangi Bhaijaan"));
console.log(findMoviesByActorName("Akshay Kumar"));
