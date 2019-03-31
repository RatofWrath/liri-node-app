require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require("node-spotify-api");

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
    var SPOTIFY_ID = "ecff23af6fbd445a8973d25597fe2267";
    var SPOTIFY_SECRET = "d326a29adbe34c869e120613b3a2faa7";

    var spotify = new Spotify({
        id: SPOTIFY_ID,
        secret: SPOTIFY_SECRET
    });

    spotify
        .search({type: 'track', query: request})
        .then(function(response) {
            console.log(response);
        })
        .catch(function(err) {
            console.log(err);
        })

    console.log("Song Name: ");
    console.log("Preview Link: ");
    console.log("Album: ");
}

function findMovieInfo(request){
    var queryUrl = "http://www.omdbapi.com/?t=" + request + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
        function(response){
        //console.log(request);
        //console.log(response.data);
        var responseString = JSON.stringify(response.data.Ratings);
        //console.log(responseString);
        var toJSONMovie = JSON.parse(responseString);
        //console.log(toJSONMovie);

        console.log("Title: " + response.data.Title);
        console.log("Year of Release: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + toJSONMovie[1].Value);
        console.log("Country of Origin: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        }
    );
}

function findRandomInfo(request){

}