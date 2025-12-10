import axios from "axios";
import type {PokemonFeatures} from "../model/pokemon.model.ts";

// const apiUrl: string = import.meta.env.VITE_API_URL;
const apiUrl: string = "https://pokeapi.co/api/v2/";

export async function searchPokemon(name: string) {
    try {
        console.log(apiUrl);
        const response = await axios.get<PokemonFeatures>(apiUrl + "pokemon/" + name);
        const feature: PokemonFeatures = response.data;
        console.log("Features:", feature);
        return feature;
    } catch (error) {
        console.log(error);
    }
}