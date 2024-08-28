const offset = 0;
const limit = 27;
const url =  `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

const convertePokemonToLi= (pokemon) => {
    return `
        <li class="pokemon">
                <div class="number">#001</div>
                <div class="name">${pokemon.name}</div>
                <div class="detail">
                    <div class="types">
                        <div class="type">Grass</div>
                        <div class="type">Poison</div>
                    </div>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Bulbasaur">
                </div>
            </li>
    `
}

const pokemonList = document.getElementById("pokelist")

fetch(url)
    .then((response)=> response.json())
    .then((promise)=> promise.results)
    .then((list)=> {
        for (let i = 0; i < list.length; i ++){
            const pokemon = list[i];
            pokemonList.innerHTML += convertePokemonToLi(pokemon);
        }
    }) 
    .catch((error)=> console.log(error));