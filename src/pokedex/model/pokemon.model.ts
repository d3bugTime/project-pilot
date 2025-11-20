export interface PokemonFeatures {
    id: number;
    name: string;
    sprites: Sprites;
    types: Type[];
    species: Species;
    height: number;
    weight: number;
    abilities: Ability[];
    stats: Stat[];
}

export interface Sprites {
    other: Other;
}

export interface Other {
    "official-artwork": OfficialArtwork;
}

export interface OfficialArtwork {
    front_default: string;
}

export interface Type {
    slot: number;
    type: Type2;
}

export interface Type2 {
    name: string;
    url: string;
}

export interface Species {
    name: string;
    url: string;
}

export interface Ability {
    ability: Ability2;
    is_hidden: boolean;
    slot: number;
}

export interface Ability2 {
    name: string;
    url: string;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: Stat2;
}

export interface Stat2 {
    name: string;
    url: string;
}