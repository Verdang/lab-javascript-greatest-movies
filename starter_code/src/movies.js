/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
  let sumOfRatings = array.reduce((accu, element) => {
    let rating = element.rate || 0;
    return accu + parseFloat(rating);
  }, 0);
  return Math.round((sumOfRatings / array.length) * 100) / 100;
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
  let dramaMovies = array.filter(movie => {
    return movie.genre.includes("Drama");
  });
  if (!dramaMovies.length) return 0;
  return ratesAverage(dramaMovies);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
/*function orderByDuration(array){
  array.sort(function(a,b){
    if (a.duration > b.duration) {
      return 1} else if (a.duration < b.duration) {
        return -1; } else {
      return array.sort(function(a,b){
        if (a.title > b.title) {
          return 1} else {
            return -1;
          }
      })}
  });
  console.log(array);
  return array;
}
*/

function orderByDuration(movies) {
  return movies.sort((a, b) => {
    if (a.duration === b.duration) {
      return a.title > b.title;
    }
    return a.duration - b.duration;
  });
}

/*
function orderByDuration(array) {
  array.sort((a, b) => (a.duration > b.duration) ? 1 : (a.duration === b.duration) ? ((a.title > b.title) ? 1 : -1) : -1)
  console.log(array);
  return array
}
*/

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  let array2 = []
  let f = array.map(x => {
      if (x.duration.length === 7) {
          return (parseInt(x.duration[0]) * 60 + parseInt(x.duration[3]))
      } else if (x.duration.length === 8) {
          return (parseInt(x.duration[0]) * 60 + parseInt(x.duration[3]) * 10 + parseInt(x.duration[4]))
      } else if (x.duration.length === 2) {
          return (parseInt(x.duration[0]) * 60)
      } else {
          return (parseInt(x.duration[0]) * 10 + parseInt(x.duration[1]))
      }
  })
  for (i = 0; i < f.length; i++) {
      array2[i]={
          title: array[i].title,
          year: array[i].year,
          director: array[i].director,
          duration: f[i],
          genre: array[i].genre,
          rate: array[i].rate,
      }
  }
  console.log(f)
  return array2;
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average
