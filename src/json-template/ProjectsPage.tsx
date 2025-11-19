import {MOCK_PROJECTS} from "./MockProjects.ts";

export default function ProjectsPage() {
    return (
        <>
            <h1>Projects</h1>
            <pre>
                {/*Hard coded data*/}
                {JSON.stringify(MOCK_PROJECTS, null, ' ')}
            </pre>
        </>
    );
}