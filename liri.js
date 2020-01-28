require("dotenv").config();
var keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");
let input = process.argv[3];
const axios = require("axios");
const moment = require("moment");

const getSpotifyInfo = () => {
  if (!input) {
    input = "The Sign";
  }
  spotify
    .search({ type: "track", query: `${input}` })
    .then(response => {
      if (response.tracks.items.length === 0) {
        console.log("Couldn't find that song, try again");
      } else {
        console.log(response.tracks.items[0].artists[0].name);
        console.log(response.tracks.items[0].name);
        console.log(response.tracks.items[0].external_urls.spotify);
        console.log(response.tracks.items[0].album.name);
      }
    })
    .catch(err => {
      console.log(err);
    });
};

const getConcertInfo = () => {
  axios({
    method: "GET",
    url: `https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp`
  })
    .then(response => {
      console.log(response.data[0].venue.city);
      console.log(response.data[0].venue.name);
      console.log(moment(response.data[0].datetime).format("L"));
    })
    .catch(response => {
      console.log(`This ${response} failed`);
    });
};

const getMovieInfo = () => {
  if (!input) {
    input = "Mr. Nobody";
  }
  axios({
    method: "GET",
    url: `http://www.omdbapi.com/?apikey=trilogy&t=${input}`
  })
    .then(response => {
      if (response.data.Response === "False") {
        console.log(response.data.Error);
      } else {
        console.log(`Title: ${response.data.Title}`);
        console.log(`Year: ${response.data.Year}`);
        console.log(`IMDB Rating: ${response.data.imdbRating}`);
        console.log(
          `Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}`
        );
        console.log(`Country: ${response.data.Country}`);
        console.log(`Language: ${response.data.Language}`);
        console.log(`Plot: ${response.data.Plot}`);
        console.log(`Actors: ${response.data.Actors}`);
      }
    })
    .catch(err => {
      console.log(err);
    });
};

fs.appendFile(
  "log.txt",
  process.argv[2] + "," + process.argv[3] + "\n",
  err => {
    if (err) {
      return console.log(err);
    }
    console.log("Successfully added to file!");
  }
);

const doWhatItSays = () => {
  fs.readFile("random.txt", "utf8", (error, data) => {
    if (error) {
      return console.log(error);
    }
    var dataArray = data.split(",");
    input = dataArray[1];
    switch (dataArray[0]) {
      case "concert-this":
        getConcertInfo();
        break;
      case "spotify-this-song":
        getSpotifyInfo();
        break;
      case "movie-this":
        getMovieInfo();
        break;
      case "do-what-it-says":
        doWhatItSays();
        break;
      default:
        console.log("Something went wrong! Check your spelling and try again!");
    }
  });
};

switch (process.argv[2]) {
  case "concert-this":
    getConcertInfo();
    break;
  case "spotify-this-song":
    getSpotifyInfo();
    break;
  case "movie-this":
    getMovieInfo();
    break;
  case "do-what-it-says":
    doWhatItSays();
    break;
  default:
    console.log("Something went wrong! Check your spelling and try again!");
}
