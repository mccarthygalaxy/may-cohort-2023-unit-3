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