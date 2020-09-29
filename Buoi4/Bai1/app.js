async function getPokemonInfo(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/2');
    console.log(response);

}
getPokemonInfo();