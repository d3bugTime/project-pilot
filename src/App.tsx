// import ProjectsPage from "./projects/ProjectsPage.tsx";
// import Greeter from "./examples/Greeter.tsx";
// import Hello from "./examples/Hello.tsx";
// import FruitList, {type Fruit} from "./examples/FruitList.tsx";

// const data: Fruit[] = [
//     { id: 1, name: "apple" },
//     { id: 2, name: "orange" },
//     { id: 3, name: "blueberry" },
//     { id: 4, name: "banana" },
//     { id: 5, name: "kiwi" },
// ]

// import ValidatorPage from "./validator/ValidatorPage.tsx";
// import ApiPage from "./api/ApiPage.tsx";

// import TodoList from "./examples/TodoList.tsx";
// import Profile from "./examples/Profile.tsx";
import PackingList from "./examples/PackingList.tsx";

export default function App() {
    
    // function handleClick() {
    //     console.log('clicked');
    // }
    
    return (
        <div>
            {/*<ProjectsPage />*/}
            {/*<Greeter first={"Jon"} last={"Doe"} />*/}
            {/*<Hello name={"Joe"} enthusiasmLevel={1} />*/}
            {/*<FruitList fruits={data} />*/}
            {/*<button onClick={handleClick}>Click Me!</button>*/}
            {/*<ValidatorPage />*/}
            {/*<ApiPage />*/}
            {/*<TodoList />*/}
            {/*<Profile />*/}
            <PackingList />
        </div>
    );
}