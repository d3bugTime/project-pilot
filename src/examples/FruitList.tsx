export interface Fruit {
    id: number;
    name: string;
}

interface FruitsProps {
    fruits: Fruit[];
}

export default function FruitList({ fruits }: FruitsProps) {
    return (
       <ul>
           {fruits.map((fruit: Fruit) => (
               <li key={fruit.id}>{fruit.name}</li>
           ))}
       </ul> 
    );
}