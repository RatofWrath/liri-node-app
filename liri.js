require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var moment = require("moment");
var fs = require("fs");

var command = process.argv[2];
var request = process.argv.slice(3).join(" ");

switch(command){
    case "concert-this":
        findConcertInfo(request);
        break;

    case "spotify-this-song":
        if(process.argv.length < 4){
            request = "The Sign";
        }

        findSongInfo(request);
        break;
    
    case "movie-this":
        if(process.argv.length < 4){
            request = "Mr. Nobody";
        }
        findMovieInfo(request);
        break;
    
    case "do-what-this-says":
        findRandomInfo();
        break;
    
    default:
        console.log("Your request is invalid, please try again.");
}

function findConcertInfo(request){
    var queryURL = "https://rest.bandsintown.com/artists/" + request + "/events?app_id=codingbootcamp";

    axios.get(queryURL).then(
        function(response){
            for(i = 0; i < response.data.length; i++){
                //console.log(response.data[0]);
                var concertFormat = "MM/DD/YYYY"
                var concertDate = response.data[i].datetime;
                var mDate = moment(concertDate).format(concertFormat);

                console.log("Venue Name: " + response.data[i].venue.name);
                console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
                console.log("Date: " + mDate);
                console.log(" ");
            }
        }
    );
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
            //console.log(response);
            var responseString = JSON.stringify(response.tracks.items[0]);
            //console.log(responseString)
            var toJSONSong = JSON.parse(responseString);
            //console.log(toJSONSong);
            //console.log(toJSONSong.artists);

            //console.log("Artist: " + toJSONSong.artists.name);
            console.log("Artist: " + toJSONSong.artists[0].name);
            console.log("Song Name: " + toJSONSong.name)
            console.log("Preview Link: " + toJSONSong.preview_url)
            console.log("Album: " + toJSONSong.album.name);
        })
        .catch(function(err) {
            console.log(err);
        })
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

function findRandomInfo(){
    fs.readFile("random.txt", "utf8", function(error, data){
        if(error) {
            return console.log(error);
        }

        //console.log(data);
        var dataArr = data.split(",");
        //console.log(dataArr);

        var command = dataArr[0];
        var request = dataArr[1];

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
            
            default:
                console.log("Your request is invalid, please try again.");
        }
    })

}