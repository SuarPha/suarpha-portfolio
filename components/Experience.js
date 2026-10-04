import styles from "./Experience.module.css";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Experience</span>
          <h2 id="experience-heading" className="headingLg">
            Building through real projects.
          </h2>
        </div>

        <div className={styles.timeline}>
          {experience.map((item, index) => (
            <article key={item.id} className={styles.item}>
              <div className={styles.meta}>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.org}>{item.org}</span>
              </div>

              <div className={styles.body}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
