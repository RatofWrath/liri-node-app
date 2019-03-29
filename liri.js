require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
//var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var request = process.argv.slice(3).join(" ");

switch(command){
    case "concert-this":
        findConcertInfo(request);
        break;

    case "spotify-this-song":
        if(request === undefined){
            request = "The Sign";
        }

        findSongInfo(request);
        break;
    
    case "movie-this":
        if(request === undefined){
            request = "Mr. Nobody";
        }
        findMovieInfo(request);
        break;
    
    case "do-what-this-say":
        findRandomInfo();
        break;
    
    default:
        console.log("Your request is invalid, please try again.");
}

function findConcertInfo(request){
    console.log("Venue: ");
    console.log("Location: ");
    console.log("Date: ");

}

function findSongInfo(request){
    console.log("Artist");
    console.log("Song Name: ");
    console.log("Preview Link: ");
    console.log("Album: ");
}

function findMovieInfo(request){
    console.log("Title: ");
    console.log("Year of Release: ");
    console.log("IMDB Rating: ");
    console.log("Rotten Tomatoes Rating: ");
    console.log("Country of Origin: ");
    console.log("Language: ");
    console.log("Plot: ");
    console.log("Actors: ");
}

function findRandomInfo(request){

}