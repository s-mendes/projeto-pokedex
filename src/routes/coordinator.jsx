export function goToHome(navigate) {
    navigate("/");
}

export function goToDetailPage(navigate, pokemonName) {
    navigate(`/detail/${pokemonName}`);
}

export function goToPokedex(navigate) {
    navigate('/pokedex')
}

