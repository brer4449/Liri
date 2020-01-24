console.log("this is loaded");
require("dotenv/config");
const axios = require("axios");
let artist = "drake";

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

axios({
  method: "GET",
  url: "http://www.omdbapi.com/?apikey=trilogy&t=mulan"
})
  .then(response => {
    console.log(response.data);
  })
  .catch(response => {
    console.log(response.data);
  });

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
console.log(process.env.SPOTIFY_ID);
