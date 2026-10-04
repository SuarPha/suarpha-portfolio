"use client";

import styles from "./Contact.module.css";
import { site } from "@/lib/content";

function Field({ label, name, type = "text", textarea = false }) {
  const commonProps = {
    id: name,
    name,
    required: true,
    className: styles.input,
  };

  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label} *
      </label>
      {textarea ? (
        <textarea {...commonProps} rows={4} />
      ) : (
        <input {...commonProps} type={type} />
      )}
    </div>
  );
}

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const phone = data.get("phone");
    const email = data.get("email");
    const message = data.get("message");

    const subject = encodeURIComponent(`New message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <div className={styles.headerRow}>
          <h2 id="contact-heading" className={styles.heading}>
            Contact Me
          </h2>
          <span className={styles.index}>( 08 )</span>
        </div>
        <div className={styles.divider} />

        <div className={styles.grid}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <Field label="Name" name="name" />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <Field label="Email" name="email" type="email" />
            <Field label="Message" name="message" textarea />

            <button type="submit" className={styles.sendBtn}>
              Send Now
            </button>
          </form>

          <div className={styles.info}>
            <nav className={styles.socialList} aria-label="Social">
              <a href={site.social.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={site.social.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </nav>

            <div className={styles.contactLines}>
              <a href={`mailto:${site.email}`} className={styles.contactLink}>
                {site.email}
              </a>
              <a
                href={`tel:${site.phone.replace(/\s+/g, "")}`}
                className={styles.contactLink}
              >
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
