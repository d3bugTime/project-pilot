interface GreeterProps {
    first?: string;
    last?: string;
}

export default function Greeter({ first, last }: GreeterProps) {
    return (
        <h1>Hello, {first} {last}</h1>
    );
}