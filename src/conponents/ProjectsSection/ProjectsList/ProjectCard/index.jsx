import giticon from "../../../../assets/git-icon.png";
import style from "../ProjectCard/style.module.css";

export const ProjectCard = ({ list }) => {
    return(
        <li className={style.li}>
        <div className={style.projectCard}>
            <h2 className={style.h2}>{list.name}</h2>
            <img className={style.img} src={giticon} alt="icone GitHub" />
        </div>
            <p className={style.p}>{list.description}</p>
            <a className={style.a} href="">Saiba mais</a>
        </li>
    )
}