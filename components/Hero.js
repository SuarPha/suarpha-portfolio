import Image from "next/image";
import { Caveat } from "next/font/google";
import styles from "./Hero.module.css";
import { heroTech } from "@/lib/content";

const handwritten = Caveat({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-handwritten",
});

export default function Hero() {
  return (
    <section id="top" className={`${styles.hero} ${handwritten.variable}`}>
      <div className={styles.bgDots} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Hello, I&apos;m Su-Arpha</span>

          <h1 className={styles.headline}>
            Automation &amp;
            <br />
            <em>Web Systems</em> Developer
          </h1>

          <p className={styles.description}>
            I build practical digital systems that automate repetitive work,
            simplify business processes and connect the tools businesses use
            every day.
          </p>

          <div className={styles.ctaRow}>
            <a href="#work" className="btn btnPrimary">
              View my work <span className="btnArrow">→</span>
            </a>
            <a href="#contact" className="btn btnSecondary">
              Contact me
            </a>
          </div>

          <p className={styles.microcopy}>
            <span className={styles.microDot} aria-hidden="true" />
            Based in Sweden · Available for freelance &amp; contract work
          </p>

          <p className={styles.techLine}>{heroTech.join(" · ")}</p>
        </div>

        <div className={styles.portraitWrap}>
          <div className={styles.portraitFrame}>
            <Image
              src="/images/suarpha-portrait.jpg"
              alt="Portrait of Su-Arpha Kanklap"
              fill
              sizes="(min-width: 900px) 400px, 80vw"
              priority
            />
          </div>
          <span className={styles.annotation} aria-hidden="true">
            Based in Sweden ↙
          </span>
        </div>
      </div>
    </section>
  );
}
