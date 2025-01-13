import { Button } from "../../fragments/button"
import { username } from "../../data/user"
import style from "../BannerSection/style.module.css"
import banner from "../../assets/banner-img.png"

export const BannerSection = () => {
    return(
        <section className={style.bannerSection}>
            <div>
                <p className={style.usser}>{username}</p>
                <h1 className={style.h1}>Bem vindo ao meu portfólio</h1>
                <p className={style.p}>Minha paixão pela programação é o que me impulsiona a desvendar os segredos dessa área dinâmica e em constante evolução. Acredito que a programação é uma ferramenta poderosa para transformar o mundo, revolucionar indústrias e gerar impactos positivos na vida das pessoas.</p>
                <Button text="Saiba mais" className={style.bannerButton}/>
            </div>
            <img className={style.img} src={banner} alt="Banner" />
            
        </section>
    )
}