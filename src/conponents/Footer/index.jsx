import style from "../Footer/style.module.css"
import whatsappicon from "../../assets/whatsapp-icon.png" 
import linkedinicom from "../../assets/linkedin-icon.png"
import githubicon from "../../assets/github-icon.png"
import { user } from "../../data/user"


export const Footer = () => {
    return(
        <footer className={style.footer}>
            <div>
                <h2 className={style.h2}>Contato</h2>
                <div className={style.containerImgs}>
                    <img className={style.img} src={whatsappicon} alt="Ícone do WhatsApp" />
                    <img className={style.img} src={linkedinicom} alt="Ícone do Linkedin" />
                    <img className={style.img} src={githubicon} alt="Ícone do Github" />
                </div>
            </div>
            <p className={style.p} >Todos os direitos reservados - {user}</p>
        </footer>
    )
}