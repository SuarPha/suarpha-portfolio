import styles from "./PreviousWork.module.css";
import { previousWork } from "@/lib/content";
import ScrollableImage from "./ScrollableImage";

export default function PreviousWork() {
  return (
    <section className="section" aria-labelledby="previous-work-heading">
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Web Development</span>
          <h2 id="previous-work-heading" className="headingLg">
            Previous web work.
          </h2>
          <p className={styles.intro}>
            Selected projects from my earlier web development work and
            education.
          </p>
        </div>

        <div className={styles.grid}>
          {previousWork.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.media}>
                <ScrollableImage
                  src={project.image}
                  alt={`Screenshot of ${project.name}`}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  sizes="(min-width: 1100px) 33vw, (min-width: 700px) 50vw, 100vw"
                />
              </div>

              <div className={styles.body}>
                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.techRow}>
                  {project.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className={styles.links}>
                  <a href={project.github} className="textLink">
                    GitHub
                  </a>
                  <a href={project.demo} className="textLink">
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
