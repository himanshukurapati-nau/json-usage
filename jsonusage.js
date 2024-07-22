const http = require("http");

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

// Creating the HTTP server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Movies Data</h1>");
    res.write("<h2>JSON Data:</h2>");
    res.write("<pre>" + JSON.stringify(movies, null, 2) + "</pre>");

    // Adding console.log outputs with labels to the response
    res.write("<h2>Console Log Outputs:</h2>");
    res.write("<pre>");
    res.write(`Movie 1 Title: ${movies.movies[0].title}\n`);
    res.write(`Movie 1 Director: ${movies.movies[0].director}\n`);
    res.write(`Movie 1 Actors: ${movies.movies[0].actors}\n`);
    res.write(`Movie 2 Title: ${movies.movies[1].title}\n`);
    res.write(`Movie 2 Director: ${movies.movies[1].director}\n`);
    res.write(`Movie 2 Year: ${movies.movies[1].year}\n`);
    res.write(`Movie 3 Title: ${movies.movies[2].title}\n`);
    res.write(`Movie 3 Director: ${movies.movies[2].director}\n`);
    res.write(`Movie 3 Year: ${movies.movies[2].year}\n`);
    res.write("</pre>");

    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
