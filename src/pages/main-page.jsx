import { About } from "../components/about/about"
import { Header } from "../components/header/header"
import { Education } from "../components/education/education"
import { WorkExperience } from "../components/work-experience/work-experience"
import { Skills } from "../components/skills/skills"
import { Portfolio } from "../components/portfolio/portfolio"
import { ToTopButton } from "../components/to-top-button/to-top-button"

export const MainPage = () => (
    <>
        <ToTopButton />
        <Header />
        <About />
        <Education />
        <WorkExperience />
        <Skills />
        <Portfolio />
    </>
)

