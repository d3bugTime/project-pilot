import axios from "axios";
import type {PokemonFeatures} from "../model/pokemon.model.ts";

const apiUrl: string = import.meta.env.VITE_API_URL;

// export default function Search() {
//     axios.get(apiUrl + "pokemon/ditto")
//         .then((response) => {
//             console.log(response.data);
//         })
//         .catch((error) => {
//         console.log(error);
//         });
//    
//     return "Searching...";
// }

// export default async function Search(data: string): Promise<string | string[]> {
//     console.log(data);
//    
//     return "Search..."
// }

export async function searchPokemon() {
    try {
       const response = await axios.get<PokemonFeatures>(apiUrl + "pokemon/ditto");
       const feature: PokemonFeatures = response.data;
       // console.log("Features:", feature);
       return feature;
    } catch (error) {
        console.log(error);
    }
}