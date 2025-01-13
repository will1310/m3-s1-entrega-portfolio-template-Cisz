import { AboutMeSection } from "../../conponents/AboutMeSection"
import { BannerSection } from "../../conponents/BannerSection"
import { Footer } from "../../conponents/Footer"
import { Header } from "../../conponents/Header"
import { ProjectsSection } from "../../conponents/ProjectsSection"
import { TechSection } from "../../conponents/TechSection"

export const HomePage = () => {
  return (
    <>

      <Header/>
      <main>
        <BannerSection />
        <AboutMeSection />
        <TechSection />
        <ProjectsSection />
      </main>
      <Footer />

    </>
  )
}