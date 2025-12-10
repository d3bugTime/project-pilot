import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../../App.css";
import {searchPokemon} from "../api/search.api.ts";
import {useState} from "react";
import * as React from "react";
import type {PokemonFeatures} from "../model/pokemon.model.ts";
import {Typography} from "@mui/material";

export default function HomePage() {
    
    // useState Hook to detect (Frontend) and save the changes (Backend)
    const [pokemon, setPokemon] = useState("");
    const [pokemonData, setPokemonData] = useState<PokemonFeatures | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    const imageUrl: string | undefined = pokemonData?.sprites?.other?.["official-artwork"]?.front_default;
    
    // Input detection
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPokemon(value);
    }
    
    // Button request
    const handleClick = async () => {
        setLoading(true);
        setError("");
        setPokemonData(null); // Clear previous data
        
        try {
            const response = await searchPokemon(pokemon.toLocaleLowerCase());
            
            if (response) {
                setPokemonData(response);
            } else {
                setError("Pokémon not found ");
            }
        } catch (error) {
            setError("Failed to fetch data: " + error);
        } finally {
            setLoading(false);
        }
        
    }
    
    return (
        <>
            <Card variant="outlined" className={"container"}>
                <div>
                    <h4>
                        Pokédex
                    </h4>
                    
                    {/* Search Section */}
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
                                value={pokemon}
                                onChange={handleChange}
                                error={!!error}
                                helperText={error}
                                disabled={loading}
                            />
                        </div>
                        <div className={"column left-space"}>
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                onClick={handleClick}
                                disabled={loading || !pokemon.trim()}
                            >
                                {loading ? "Searching..." : "Search"}
                            </Button>
                        </div>

                    </div>

                    {/*Result Grid*/}
                    {/*<div className={"spacing row full-width center-align"}>*/}
                    {/*    <Card variant="outlined" sx={{ width: "100%" }}>*/}
                    {/*        /!*Image*!/*/}
                    {/*        {imageUrl && <img*/}
                    {/*            src={imageUrl}*/}
                    {/*            alt="Pokemon Picture"*/}
                    {/*            height="50%" */}
                    {/*            width="50%"*/}
                    {/*        />}*/}
                    {/*    </Card>*/}
                    {/*</div>*/}
                    {/*<div className={"spacing row center-align"}>*/}
                    {/*    <Card variant="outlined" sx={{ width: "100%" }}>*/}
                    {/*        {pokemonData && (*/}
                    {/*            */}
                    {/*        )}*/}
                    {/*    </Card>*/}
                    {/*</div>*/}

                    {/*
                        GRID
                        first column:
                        - Image
                        second column:
                        - Name
                        - Number
                        - Type
                        - Species
                        third column:
                        - Height
                        - Weight
                        - Abilities
                        - Base stats
                    */}

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem', marginTop: '1rem' }}>
                        {/* Left side - Image */}
                        <Card variant="outlined" sx={{ p: 2 }}>
                            {imageUrl && <img
                                src={pokemonData?.sprites.other["official-artwork"].front_default}
                                alt="Pokemon"
                                style={{ width: '100%', height: 'auto' }}
                            />}
                        </Card>

                        {/* Right side - Details */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                            <Card variant="outlined" sx={{ p: 2 }}>
                                <Typography variant="subtitle2">Name</Typography>
                                <Typography>{pokemonData?.name}</Typography>
                                <Typography variant="subtitle2">Number</Typography>
                                <Typography>{pokemonData?.id}</Typography>
                                <Typography variant="subtitle2">Type</Typography>
                                <Typography>{pokemonData?.types
                                    .map(typeItem => typeItem.type.name)
                                    .join(', ')}
                                </Typography>
                                <Typography variant="subtitle2">Species</Typography>
                                <Typography>{pokemonData?.species.name}</Typography>
                            </Card>

                            <Card variant="outlined" sx={{ p: 2 }}>
                                <Typography variant="subtitle2">Height</Typography>
                                <Typography>#{pokemonData?.height}</Typography>
                                <Typography variant="subtitle2">Weight</Typography>
                                <Typography>#{pokemonData?.weight}</Typography>
                                <Typography variant="subtitle2">Abilities</Typography>
                                <Typography>{pokemonData?.abilities
                                    .map(typeAbility => typeAbility.ability.name)
                                    .join(', ')}
                                </Typography>
                                <Typography variant="subtitle2">Base Stats</Typography>
                                <Typography>{pokemonData?.stats
                                    .map(baseStat => baseStat.stat.name)
                                    .join(', ')}
                                </Typography>
                            </Card>
                            
                        </div>
                    </div>
                </div>
            </Card>
        </>
    );
}