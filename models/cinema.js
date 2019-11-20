const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmsByProperty = function (property, value) {
  const film = this.films.filter((film) => {
    return film.property === value
  });
  return film;
}

Cinema.prototype.filmTitles = function (films) {
  const filmTitles = films.map((film) => {
    return film.title;
  });
  return filmTitles;
};

Cinema.prototype.filmByTitle = function (title) {
  const film = this.films.filter((film) => {
    return film.title === title
  });
  return film;
}

Cinema.prototype.filmsByGenre = function (genre) {
  const films = this.films.filter((film) => {
    return film.genre === genre
  });
  return films;
}

Cinema.prototype.checkFilmByYear = function (year) {
  const films = this.films.map(film => film.year);
  const filmYears = films.includes(year);
  return filmYears;
};

Cinema.prototype.isLongerThan = function (runTime) {
  const runTimes = this.films.map(film => film.length);
  const array = runTimes.filter(time => {
    return time < runTime;
  });
return array.length === 0;
}

Cinema.prototype.totalRunTimes = function () {
  const runTimes = this.films.map(films => films.length);
  const total = runTimes.reduce((runningTotal, time) => {
    return runningTotal + time;
  });
  return total;
}
module.exports = Cinema;
