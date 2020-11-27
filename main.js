async function getPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = response.json();
    return data;
}

function pokemonNotFound() {
    window.pokemon.textContent = 'Not found'
    window.pokemonImg.src = './notfound.jpeg'
    window.pokemonImg.width = 300
}

async function init() {
    const firstPokemon = await getPokemon('mewtwo');
    upDatePokemon(firstPokemon)

}
init()

function upDatePokemon(pokemon) {
    window.pokemon.textContent = pokemon.name
    window.pokemonImg.src = pokemon.sprites.front_default
}

window.searchPokemon.addEventListener('change', async () => {
    try {
        const pokemon = await getPokemon(window.searchPokemon.value.toLowerCase())
        upDatePokemon(pokemon)
    } catch (error) {
        pokemonNotFound()
    }

})
