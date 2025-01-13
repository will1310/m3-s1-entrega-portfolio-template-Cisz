import { Button } from "../../fragments/button"
import style from "../Header/style.module.css"

export const Header = () => {
    return(
        <header className={style.header}>
            <h2 className={style.h2}>Portfólio</h2>
            <div className={style.header__container}>
                <p className={style.p}>Sobre</p>
                <p className={style.p}>Stack</p>
                <p className={style.p}>Projetos</p>
            </div>
            <Button text="Contato" className={style.header__button} />
        </header>
    )
}