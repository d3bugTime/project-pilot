export interface Fruit {
    id: number;
    name: string;
}

interface FruitsProps {
    fruits: Fruit[];
}

function FruitListItem({ id, name }: Fruit) {
    function handleClick(id: number) {
        console.log(`removed ${id}`);
    }
    
    return (
        <li onClick={() => handleClick(id)}>
            {name}
        </li>
    );
}

export default function FruitList({ fruits }: FruitsProps) {
    return (
       <ul>
           {fruits.map((fruit: Fruit) => (
               // <li key={fruit.id}>{fruit.name}</li>
               <FruitListItem key={fruit.id} id={fruit.id}  name={fruit.name} />
           ))}
       </ul> 
    );
}