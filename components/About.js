import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.header}>
            <span className="eyebrow">About</span>
            <h2 id="about-heading" className={styles.heading}>
              A little about me.
            </h2>

            <dl className={styles.facts}>
              <div className={styles.fact}>
                <dt className={styles.factLabel}>Location</dt>
                <dd className={styles.factValue}>Sweden</dd>
              </div>
              <div className={styles.fact}>
                <dt className={styles.factLabel}>Focus</dt>
                <dd className={styles.factValue}>Automation &amp; Web Systems</dd>
              </div>
              <div className={styles.fact}>
                <dt className={styles.factLabel}>Availability</dt>
                <dd className={styles.factValue}>Freelance &amp; Contract</dd>
              </div>
            </dl>
          </div>

          <div className={styles.copy}>
            <p className={styles.lead}>
              I&apos;m a developer based in Sweden with a background in web
              development and a growing focus on automation and practical
              business systems.
            </p>
            <p className={styles.paragraph}>
              What interests me most is not technology for its own sake. I
              like understanding how work is actually done, finding the
              repetitive parts and building something that makes the process
              simpler.
            </p>
            <p className={styles.paragraph}>
              Much of what I build comes from problems I&apos;ve encountered
              myself — which means I also spend a lot of time testing,
              breaking, debugging and improving the systems I create.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
