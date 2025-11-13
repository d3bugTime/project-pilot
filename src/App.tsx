// import ProjectsPage from "./projects/ProjectsPage.tsx";
import Greeter from "./greeter/Greeter.tsx";

export default function App() {
    return (
        <div className="container">
            {/*<ProjectsPage />*/}
            <Greeter first={"Jon"} last={"Doe"} />
        </div>
    );
}