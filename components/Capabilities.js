import styles from "./Capabilities.module.css";
import { capabilities } from "@/lib/content";

export default function Capabilities() {
  return (
    <section className="section sectionDark" aria-labelledby="what-i-do-heading">
      <div className={`container ${styles.wrap}`}>
        <div className={styles.header}>
          <span className="eyebrow">What I Do</span>
          <h2 id="what-i-do-heading" className={styles.heading}>
            From repetitive work
            <br />
            to practical systems.
          </h2>
        </div>

        <div className={styles.grid}>
          {capabilities.map((item) => (
            <article key={item.number} className={styles.card}>
              <span className={styles.number}>{item.number}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              <div className={styles.techRow}>
                {item.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
