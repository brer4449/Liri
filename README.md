## Table of contents

- [General info](#general-info)
- [Instructions](#instructions)
- [Functionality](#functionality)
- [Technologies](#technologies)
- [Dependencies](#dependencies)
- [Github Link](#github-link)

## General Info

This application is a CLI app. This app acts like Siri but for the command line. When given an instruction, it will fetch pertinent data. It does this so that users can get more information about a desired song, movie or concert venue.

## Instructions

The user MUST have a dot env file to use the spotify portion of this app. First the user must open the file in terminal and then run the program "node liri.js" and then one of the four set of commands. Liri is meant to be told a command of "concert-this", "spotify-this-song", "movie-this", or "do-what-it-says" and it will then give you the corresponding data of that inquiry. Be sure to put your song/movie/artist in quotes, otherwise it will not work (ie. "node liri.js movie-this "the goonies"). The last command do-what-it-says runs what is in the random.txt file, so if the user wants a different song from "I Want It That Way", they must go into that file and change it to the desired song.

## Functionality

![first example of working application](https://github.com/brer4449/homework9/blob/master/assets/images/liri1.png)
![second example of working application](https://github.com/brer4449/homework9/blob/master/assets/images/liri2.png)
![second example of working application](https://github.com/brer4449/homework9/blob/master/assets/images/liri3.png)

## Technologies

Node version 12.13.1

## Dependencies

- Axios version 0.19.2
- Dotenv version 8.2.0
- Moment version 2.24.0
- Node-Spotify-API version 1.1.1

## Github Link

https://github.com/brer4449/homework9
