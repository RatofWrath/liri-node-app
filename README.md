# liri-node-app

###1. Functions

####1.1: Introduction

####1.2: Concert-this

####1.3: Spotify-this-song

####1.4: Movie-this

####1.5: Do-what-this-says

###2: Test Video


####1.1: Introduction

Welcome, to liri-node-app. This is a CLI app that is run using node.js that allows the user to search for: upcoming for bands the user is interested in, info for songs or movies that the user is interested in or performing a function listed in random.txt.

####1.2: Concert-this

The concert-this function uses the *Bands-In-Town API* to return a set of concert dates (along with the venue's name and city), after the user types "node liri.js concert-this BAND-NAME.

####1.3 Spotify-this-song

The Spotify-this-song function uses *Spotify's API* to search for a song that the user requests and then displays the first result found along with the artist that played that matching song, the album it appears on and a thirty second preview link.
To execute this function type "node liri.js spotify-this-song SONGNAME.

####1.4 Movie-this

The Movie-this function uses *OMDB's API* to search for info related to a movie that the user searchs for.  This info includes year of release, IMDB Rating, Rotten Tomatoes Rating, Actors, Plot, Language and Country of Origin.
To execute this function the user should type "node liri.js movie-this MOVIENAME.

####1.5 Do-What-This-Says
The Do-what-this-says function reads the random.txt file that is part of the project using the readFile to take in the content of our text file and the executes it as if it was a user request.  By default the request inside of random.txt is "Spotify-this-song get low".

###2. Test Video

Here is a link showing my project in action: https://drive.google.com/open?id=1l0zRhITL4Mlh4nKGg8R3EvpmeqNOs8QZ
