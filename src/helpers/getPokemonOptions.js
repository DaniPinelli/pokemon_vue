import pokemonApi from "@/api/pokemonApi"

const getPokemons = () => {
    let pokemonsArr = Array.from(Array(650));
    return pokemonsArr.map((_, index) => index + 1)
}

const getPokemonOptions = () => {

    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
    getPokemonNames(mixedPokemons.splice(0, 4));
}

const getPokemonNames = async ([a, b, c, d] = []) => {

    const res = await pokemonApi.get(`/1`)
    console.log(res)
    // console.log(a, b, c, d)
}


export default getPokemonOptions;