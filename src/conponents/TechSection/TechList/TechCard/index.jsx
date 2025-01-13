import style from "../TechCard/style.module.css"

export const TechCard = ({ list }) => {
    return (
        <li className={style.li}>
            <img className={style.img} src={list.img} />
            <p className={style.p} >{list.name}</p>
        </li>
    )
}