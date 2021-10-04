// Gerar uma lista de filmes com o tamanho que eu desejar
function getListMovies(size, movies) {
    let popularMovies = [];

    for (let i = 0, l=size; i < l; i++) {
        popularMovies.push(movies[i]);
    }

    return popularMovies;
}

export {
    getListMovies
}