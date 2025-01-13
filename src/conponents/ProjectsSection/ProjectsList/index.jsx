import { ProjectCard } from "./ProjectCard"
import { projects } from "../../../data/projects"


export const ProjectsList = () => {

    return(
        <>
            {projects.map(list => (
                <ProjectCard key={list[0]} list={list}/>,
                <ProjectCard key={list[1]} list={list}/>,
                <ProjectCard key={list[2]} list={list}/>,
                <ProjectCard key={list[3]} list={list}/>
            ))}
        </>
    )
}