require("dotenv/config");
const axios = require("axios");
let input = process.argv[3];

// axios({
//   method: "GET",
//   url: `https://rest.bandsintown.com/artists/"${artist}"/events?app_id=codingbootcamp`
// })
//   .then(response => {
//     response.data;
//     console.log(response.data);
//   })
//   .catch(response => {
//     console.log(`This ${response} failed`);
//   });

// concertFunction() = () => {};

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
  .catch(response => {
    console.log(`Well that ${response} didn't work!`);
  });

exports.movies = {
  movie: movieFunction
};
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
// console.log(process.env.SPOTIFY_ID);
