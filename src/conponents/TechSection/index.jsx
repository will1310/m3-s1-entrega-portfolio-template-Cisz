import { TechList } from "./TechList/indes"
import style from "../TechSection/style.module.css"

export const TechSection = () => {
    return (
        <section className={style.techSection}>
            <h2 className={style.h2}>Tecnologias</h2>
            <ul className={style.ul}>
                <TechList/>
            </ul>
        </section>
    )
}