/*

!   Challenge Details:
    - Create an object called "hulu".
    - This object will have 3 main keys:
        - id, movies, and shows.
    - id will simply be an integer.
    - movies will be an array of objects that represent individual movies.
        These objects will have:
                - title will be a string
                - genre will be an array of strings
                - rating will be a string
                - run time will be an integer representing total minutes (whole number)
                - year released will be an integer.
    - shows will be an array of objects that represent individual shows.
        - These shows will have the following keys:
            - title will be a string
            - number of seasons an integer
            - seasons will be an array of objects that will represent individual seasons.
                - A season will have the following keys:
                    - season will be an integer
                    - number of episodes will be an iteger
                    - episodes will be an array of objects that hold individual episodes.
                        - Episodes will only detail the title of the episode and an original aired date.
    
    - There should be at least 2 movie objects.
    - There will only need to be 1 show object.
        - The show should detail 2 seasons with only 2 episodes each season.
    
    * This information can be 100% fabricated
    
    - After the hulu object has been created:
        - write 3 console logs
            - detail the array of movies
            - show the title of the first show
            - show the title of episode 1 of the second season of the first show.
*/



const hulu = {

    id: 1,

    movies: [
        {
            title: "Batman",
            genre: [ "superhero", "action" ],
            rating: "PG-13",
            runtime: 126,
            yearRelease: 1989,
        },
        {
            title: "Contact",
            genre: [ "scifi", "drama" ],
            rating: "PG",
            runtime: 150,
            yearRelease: 1997,
        }
    ],

    shows: [
        {
            title: "Young Sheldon",
            seasonsCount: 2,
            seasons: [
                {
                    seasonNumber: 1,
                    episodeCount: 22,
                    episodes: [
                        {
                            title: "Pilot",
                            airDate: "09-25-2017",
                        },
                        {
                            title: "Rockets, Communists, and the Dewey Decimal System",
                            airDate: "11-02-2017",
                        },
                    ]
                },
                {
                    seasonNumber: 2,
                    episodeCount: 22,
                    episodes: [
                        {
                            title: "A High Pitched Buzz and Training Wheels",
                            airDate: "09-24-2018",
                        },
                        {
                            title: "A Rival Prodigy and Sir Isaac Neutron",
                            airDate: "09-27-2018",
                        },
                    ]
                },
            ]
        }
    ]
}

console.log(hulu.movies);
console.log(hulu.shows[0].title);
console.log(hulu.shows[0].seasons[1].episodes[1].title);