const movies_json = `{
    "movies": [
       {
         "title": "Running Scared",
         "director": "Wayne Kramer",
         "year": 2006,
         "genre": "Action",
         "actors": ["Paul Walker", "Cameron Bright", "Chazz Palminteri"]
       },
       {
         "title": "500 days of summer",
         "director": "Marc Webb",
         "year": 2009,
         "genre": "Comedy",
         "actors": ["Zooey Deschanel", "Joseph Gordon-Levitt", "Geoffrey Arend"]
       },
       {
         "title": "Kung Fu Hustle",
         "director": "Stephen Chow",
         "year": 2004,
         "genre": "Fantasy",
         "actors": ["Stephen Chow", "Wah Yuen", "Qiu Yuen"]
       }
     ]
   }`;

const movies = JSON.parse(movies_json);

describe('Movies JSON Data', () => {
    it('should have three movies', () => {
        expect(movies.movies.length).toBe(3);
    });

    it('should correctly parse movie details', () => {
        expect(movies.movies[1].title).toBe('500 days of summer');
        expect(movies.movies[1].director).toBe('Marc Webb');
        expect(movies.movies[1].actors).toEqual(["Zooey Deschanel", "Joseph Gordon-Levitt", "Geoffrey Arend"]);
    });

    it('should stringify back to original format', () => {
        const movies_string = JSON.stringify(movies, null, 2);
        expect(movies_string).toBe(movies_json);
    });
});
