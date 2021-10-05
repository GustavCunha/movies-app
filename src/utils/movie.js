// Gerar uma lista de filmes com o tamanho que eu desejar
function getListMovies(size, movies) {
    let popularMovies = [];

    for (let i = 0, l=size; i < l; i++) {
        popularMovies.push(movies[i]);
    }

    return popularMovies;
}

//Gerar um número aleatório com base no tamanho da lista de filmes que eu passar
function randomBanner(movies) {
    return Math.floor(Math.random() * movies.length);
}

export {
    getListMovies,
    randomBanner
}