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
                            airDate: "2017-09-25",
                        },
                        {
                            title: "Rockets, Communists, and the Dewey Decimal System",
                            airDate: "2017-11-02",
                        },
                    ]
                },
                {
                    seasonNumber: 2,
                    episodeCount: 22,
                    episodes: [
                        {
                            title: "A High Pitched Buzz and Training Wheels",
                            airDate: "2018-09-24",
                        },
                        {
                            title: "A Rival Prodigy and Sir Isaac Neutron",
                            airDate: "2018-09-27",
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