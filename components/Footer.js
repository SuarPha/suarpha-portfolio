import styles from "./Footer.module.css";
import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.badgeRow}>
          <span className={styles.line} aria-hidden="true" />
          <a href="#top" className={styles.badge} aria-label="Back to top">
            {site.initials}
          </a>
          <span className={styles.line} aria-hidden="true" />
        </div>

        <p className={styles.copyright}>
          © 2026 {site.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
