export function goToHome(navigate) {
    navigate("/");
}

export function goToDetailPage(navigate, pokemonName) {
    navigate(`/detail/${pokemonName}`);
}

