const POKEMON_API ='https://pokeapi.co/api/v2/';
const first151 ='pokemon/?limit=151&offset=0';

export const getPokemonList = async () => {
    const resp = await fetch(`${POKEMON_API}${first151}`);
    const data = await resp.json();
    return data.results;
}
export const getPokemon = async (name:string) => {
    const resp = await fetch(`${POKEMON_API}pokemon/${name}`);
    const data = await resp.json();
    return data;
}

