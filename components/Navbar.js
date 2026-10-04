import styles from "./Navbar.module.css";
import { navLinks } from "@/lib/content";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo}>
          Su-Arpha.
        </a>

        <nav className={styles.links} aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className={`btn btnPrimary ${styles.cta}`}>
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
