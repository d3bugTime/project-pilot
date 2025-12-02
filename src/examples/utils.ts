import type { PersonProps } from "../interfaces/personProps.ts";

export function getImageUrl(person: PersonProps) {
    return (
        'https://upload.wikimedia.org/wikipedia/en/0/' +
           person.imageId + '/' +
            person.name +
            '.jpg'
    );
}

// https://upload.wikimedia.org/wikipedia/en/0/08/Katsuko_Saruhashi.jpg