async function getPokemon(id){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = response.json();
        return data;  
    } catch(error){
        
        console.error("Pokemon no encontrado")
    }
    
}

async function init(){
    const firstPokemon = await getPokemon('mewtwo');
    upDatePokemon(firstPokemon)

}
init()

function upDatePokemon(pokemon){
    window.pokemon.textContent = pokemon.name
    window.pokemonImg.src = pokemon.sprites.front_default
}

window.searchPokemon.addEventListener('change', async() => {
    const pokemon = await getPokemon(window.searchPokemon.value)
    upDatePokemon(pokemon)
})
