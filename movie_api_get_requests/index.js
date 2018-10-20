const axios = require("axios");

axios
  .get(
    "https://api.themoviedb.org/3/movie/521?api_key=582a8603f59dea247ae6c02f648fccbf"
  )
  .then(result => {
    const movie = result.data;
    console.log(`The Title of the movie is ${movie.original_title}`);
    console.log(`The vote_count for the movie is ${movie.vote_count}`);
    console.log(`The movie was released in ${movie.release_date}`);
  })
  .catch(err => {
    console.log(err);
  });
