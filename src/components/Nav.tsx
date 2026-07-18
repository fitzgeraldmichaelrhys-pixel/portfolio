import { useCallback, useEffect, useId, useState } from 'react'
import styles from './Nav.module.css'

const NAV_LINKS = [
  { label: 'Strengths', href: '#tracks' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'CV', href: '#cv' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen, closeMenu])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        <a href="#" className={styles.brand} onClick={closeMenu}>
          Michael Fitzgerald
        </a>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={styles.toggleBar} />
          <span className={styles.toggleBar} />
          <span className={styles.toggleBar} />
        </button>

        <div
          id={menuId}
          className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}
        >
          <ul className={styles.list}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={styles.link} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Michael_Fitzgerald_CV.pdf"
                className={styles.link}
                download="Michael_Fitzgerald_CV.pdf"
                onClick={closeMenu}
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
