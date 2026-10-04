import styles from "./Skills.module.css";
import { skillGroups } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Skills &amp; Tools</span>
          <h2 id="skills-heading" className="headingLg">
            What I work with.
          </h2>
          <p className={styles.intro}>
            Technologies and tools I use to build, automate and improve
            digital systems.
          </p>
        </div>

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div key={group.title} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <div className={styles.skillList}>
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
