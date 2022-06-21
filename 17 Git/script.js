const numberOfFilms = prompt("Скільки фільмів ви переглянули за останні пів року?","");
console.log(numberOfFilms);

let personalMovieDB = {
  count:  numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false

};
let lastFilms = prompt("Останній переглянутий","");
let rating = prompt("Рейтинг від 1 до 10","");
let lastFilms2 = prompt("Останній переглянутий","");
let rating2 = prompt("Рейтинг від 1 до 10","");// console.log(`${lastFilms}${rating}`);
personalMovieDB.movies[lastFilms] = rating;
personalMovieDB.movies[lastFilms2] = rating2;
console.log(personalMovieDB);