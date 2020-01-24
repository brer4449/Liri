require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// console.log(keys.spotify);
concertFunction() = () => {};
switch (process.argv[2]) {
  case "concert-this":
    concertFunction();
    break;
  case "spotify-this-song":
    spotifyFunction();
    break;
  case "movie-this":
    movieFunction();
    break;
  case "do-what-it-says":
    textFunction();
    break;
  default:
    console.log("Something went wrong! Check your spelling and try again!");
}
