import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Scorecard } from './components/Scorecard'
import { DualTracks } from './components/DualTracks'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Capabilities } from './components/Capabilities'
import { FeaturedWork } from './components/FeaturedWork'
import { CvDocument } from './components/CvDocument'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Reveal } from './components/Reveal'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}>
      <a className={styles.skip} href="#experience">
        Skip to experience
      </a>
      <Nav />
      <main>
        <Hero />
        <Reveal>
          <section className={`${styles.bandWide} ${styles.bandTint}`}>
            <Scorecard />
          </section>
        </Reveal>
        <Reveal>
          <section className={`${styles.bandWide} ${styles.bandPlum}`}>
            <DualTracks />
          </section>
        </Reveal>
        <Reveal>
          <section id="experience" className={`${styles.bandWide} ${styles.bandCopper}`}>
            <Experience />
          </section>
        </Reveal>
        <Reveal>
          <section id="education" className={`${styles.bandWide} ${styles.bandSeaside}`}>
            <Education />
          </section>
        </Reveal>
        <Reveal>
          <section id="skills" className={styles.bandWide}>
            <Capabilities />
          </section>
        </Reveal>
        <Reveal>
          <FeaturedWork />
        </Reveal>
        <Reveal>
          <section className={`${styles.band} ${styles.bandCopper}`}>
            <CvDocument />
          </section>
        </Reveal>
        <Reveal>
          <section id="about" className={`${styles.band} ${styles.bandPlum}`}>
            <About />
          </section>
        </Reveal>
        <Reveal>
          <section id="contact" className={styles.band}>
            <Contact />
          </section>
        </Reveal>
      </main>
      <Footer />
    </div>
  )
}
