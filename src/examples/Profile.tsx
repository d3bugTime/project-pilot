import { getImageUrl } from "./utils.ts";
import type { PersonProps } from "../interfaces/personProps.ts";
import type { ReactNode } from "react";

export default function Profile() {
    return (
        <Card>
            <Avatar
                imageId={'08'}
                name={'Katsuko_Saruhashi'}
            />
        </Card>
    );
}

export function Avatar(person: PersonProps) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
        />
    );
}

function Card({children}: {children: ReactNode}) {
    return (
        <div className="card">
            { children }
        </div>
    );
}