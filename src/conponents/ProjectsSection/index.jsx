import { ProjectsList } from "./ProjectsList"
import style from "../ProjectsSection/style.module.css"

export const ProjectsSection = () => {
    return(
        <section className={style.projectsSection}>
            <h2 className={style.h2}>Projetos</h2>
            <ul className={style.ul}>
                <ProjectsList/>
            </ul>
        </section>
    )
}