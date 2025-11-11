import {MOCK_PROJECTS} from "./MockProjects.ts";

export default function ProjectsPage() {
    return (
        <>
            <h1>Projects</h1>
            <pre>
                {JSON.stringify(MOCK_PROJECTS, null, ' ')}
            </pre>
        </>
    );
}