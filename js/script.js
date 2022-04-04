'use strict';

const numberoffilms = prompt('сколько фильмов уже просмотрели?');

const personalmovieDB = {
   count: numberoffilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalmovieDB.movies[a] = b;
personalmovieDB.movies[c] = d;

console.log(personalmovieDB);
