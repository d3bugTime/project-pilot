import axios from "axios";

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
       const response = await axios.get(apiUrl + "pokemon/ditto"); 
       return response.data;
    } catch (error) {
        console.log(error);
    }
}