import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../../App.css";
import {useEffect} from "react";
import {searchPokemon} from "../api/search.api.ts";

export default function HomePage() {
    
    useEffect(() => {
        const getPokemon = async () => {
            const pokemon = await searchPokemon();
            console.log(pokemon);
        }
        getPokemon()
            .catch(console.error);
    }, []);

    return (
        <>
            <Card variant="outlined" className={"container"}>
                <div>
                    <h4>
                        Pokédex
                    </h4>
                    <div className={"spacing row"}>
                        <div className={"double-column"}>
                            <TextField
                                id="searchInput"
                                name="searchInput"
                                type="text"
                                label="Search"
                                variant="outlined"
                                size="small"
                                className={"full-width"}
                            />
                        </div>
                        <div className={"column left-space"}>
                            <Button
                                type="submit"
                                variant="contained"
                                size="large">
                                Search
                            </Button>
                        </div>

                    </div>

                    <div className={"spacing row full-width center-align"}>
                        <Card variant="outlined" sx={{ width: "100%" }}>
                            Imagen
                        </Card>
                    </div>
                    <div className={"spacing row center-align"}>
                        <Card variant="outlined" sx={{ width: "100%" }}>
                        </Card>
                    </div>
                </div>
            </Card>
        </>
    );
}