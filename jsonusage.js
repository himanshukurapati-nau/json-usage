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
const movies_string = JSON.stringify(movies, null, 2);

console.log(movies.movies[1].title);
console.log(movies.movies[1].director);
console.log(movies.movies[1].actors);
console.log(movies.movies[2].title);
console.log(movies.movies[2].director);
console.log(movies.movies[2].year);

console.log(movies_string);