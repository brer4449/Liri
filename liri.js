require("dotenv").config();
var keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
let input = process.argv[3];
const axios = require("axios");

let spotifyFunction = spotify
  .search({ type: "track", query: `${input}` })
  .then(response => {
    console.log(response.tracks.items[0].artists[0].name);
    console.log(response.tracks.items[0].name);
    console.log(response.tracks.items[0].external_urls.spotify);
    console.log(response.tracks.items[0].album.name);
  })
  .catch(err => {
    console.log(err);
  });
// console.log(keys.spotify);

//Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")
// concertFunction = axios({
//   method: "GET",
//   url: `https://rest.bandsintown.com/artists/"${input}"/events?app_id=codingbootcamp`
// })
//   .then(response => {
//     response.data;
//     console.log(response);
//   })
//   .catch(response => {
//     console.log(`This ${response} failed`);
//   });

movieFunction = axios({
  method: "GET",
  url: `http://www.omdbapi.com/?apikey=trilogy&t=${input}`
})
  .then(response => {
    console.log(`Title: ${response.data.Title}`);
    console.log(`Year: ${response.data.Year}`);
    console.log(`IMDB Rating: ${response.data.imdbRating}`);
    console.log(`Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}`);
    console.log(`Country: ${response.data.Country}`);
    console.log(`Language: ${response.data.Language}`);
    console.log(`Plot: ${response.data.Plot}`);
    console.log(`Actors: ${response.data.Actors}`);
  })
  .catch(err => {
    console.log(err);
  });

switch (process.argv[2]) {
  case "concert-this":
    // concertFunction;
    break;
  case "spotify-this-song":
    spotifyFunction;
    break;
  case "movie-this":
    movieFunction;
    break;
  case "do-what-it-says":
    // textFunction();
    break;
  default:
    console.log("Something went wrong! Check your spelling and try again!");
}
