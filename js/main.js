const offset = 0;
const limit = 151;
const url =  `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

const pokemonList = document.getElementById("pokelist")

function getTypesLi(types){
    return `
        <div class="type ${types.type.name}"> ${types.type.name}</div>
    `
}

function convertePokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.types[0].type.name}">
                <div class="number">#${pokemon.id}</div>
                <div class="name">${pokemon.name}</div>
                <div class="detail">
                    <div class="types">
                        ${pokemon.types.map(getTypesLi).join("")}
                    </div>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg" alt="${pokemon.name}">
                </div>
            </li>
    `
}

function getPokemonDetails(pokemon){
    return fetch (pokemon.url)
        .then((response)=> response.json());
}

fetch(url) 
    .then((response)=> response.json())
    .then((promise)=> promise.results)
    .then((list)=> pokemonList.innerHTML = list.map(getPokemonDetails))
    .then((details)=> Promise.all(details))
    .then((newList)=> pokemonList.innerHTML = newList.map(convertePokemonToLi).join('')) 
    .catch((error)=> console.log(error));