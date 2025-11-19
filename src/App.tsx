// import ProjectsPage from "./json-template/ProjectsPage.tsx";
// import Hello from "./callback-greeting/Hello.tsx";
// import FruitList, {type Fruit} from "./array-map/FruitList.tsx";

// const data: Fruit[] = [
//     { id: 1, name: "apple" },
//     { id: 2, name: "orange" },
//     { id: 3, name: "blueberry" },
//     { id: 4, name: "banana" },
//     { id: 5, name: "kiwi" },
// ]

// import ValidatorPage from "./validator/ValidatorPage.tsx";
import HomePage from "./pokedex/pages/HomePage.tsx";

export default function App() {
    
    // function handleClick() {
    //     console.log('clicked');
    // }
    
    return (
        <div>
            {/*<ProjectsPage />*/}
            {/*<Hello name={"Joe"} enthusiasmLevel={1} />*/}
            {/*<FruitList fruits={data} />*/}
            {/*<button onClick={handleClick}>Click Me!</button>*/}
            {/*<ValidatorPage />*/}
            <HomePage />
        </div>
    );
}