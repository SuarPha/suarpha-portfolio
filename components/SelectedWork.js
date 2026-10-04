import styles from "./SelectedWork.module.css";
import { selectedWork } from "@/lib/content";
import ScrollableImage from "./ScrollableImage";

export default function SelectedWork() {
  return (
    <section id="work" className="section" aria-labelledby="selected-work-heading">
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Selected Work</span>
          <h2 id="selected-work-heading" className="headingLg">
            Systems I&apos;ve built.
          </h2>
          <p className={styles.intro}>
            Projects where web development, automation and business processes
            come together.
          </p>
        </div>

        <div className={styles.list}>
          {selectedWork.map((project, index) => (
            <article
              key={project.id}
              className={`${styles.case} ${index % 2 === 1 ? styles.caseReverse : ""}`}
            >
              <div className={styles.media}>
                <ScrollableImage
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  sizes="(min-width: 900px) 50vw, 100vw"
                />
              </div>

              <div className={styles.content}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <span className={styles.subheading}>Stack</span>
                <div className={styles.stackRow}>
                  {project.stack.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>

                <span className={styles.subheading}>Worked on</span>
                <div className={styles.workedRow}>
                  {project.workedOn.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>

                <a href={project.href} className={`textLink ${styles.ctaLink}`}>
                  {project.cta} <span className="btnArrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
