import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { DualTracks } from './components/DualTracks'
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
      <a className={styles.skip} href="#tracks">
        Skip to strengths
      </a>
      <Nav />
      <main>
        <Hero />
        <Reveal>
          <section className={`${styles.bandWide} ${styles.bandTint}`}>
            <DualTracks />
          </section>
        </Reveal>
        <Reveal>
          <section id="skills" className={styles.bandWide}>
            <Capabilities />
          </section>
        </Reveal>
        <Reveal>
          <section className={`${styles.bandWide} ${styles.bandWork}`}>
            <FeaturedWork />
          </section>
        </Reveal>
        <Reveal>
          <section className={styles.band}>
            <CvDocument />
          </section>
        </Reveal>
        <Reveal>
          <section id="about" className={styles.band}>
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
