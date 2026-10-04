"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./MobileNav.module.css";

const items = [
  {
    id: "top",
    label: "Home",
    icon: (
      <path d="M4 11.5 12 4l8 7.5M6 10v9a1 1 0 0 0 1 1h3v-5a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v5h3a1 1 0 0 0 1-1v-9" />
    ),
  },
  {
    id: "about",
    label: "About",
    icon: (
      <>
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5 20c0-3.6 3.1-6.2 7-6.2s7 2.6 7 6.2" />
      </>
    ),
  },
  {
    id: "work",
    label: "Work",
    icon: (
      <>
        <rect x="3.5" y="8" width="17" height="11" rx="2" />
        <path d="M8.5 8V6.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2V8" />
        <path d="M3.5 13h17" />
      </>
    ),
  },
  {
    id: "skills",
    label: "Skills",
    icon: <path d="M13 3 5 13.5h5L9 21l9-10.5h-5l1-7.5Z" strokeLinejoin="round" />,
  },
  {
    id: "experience",
    label: "Experience",
    icon: (
      <>
        <circle cx="12" cy="12.5" r="7.5" />
        <path d="M12 8.5v4.3l3 1.7" />
      </>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    icon: (
      <>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
  },
];

export default function MobileNav() {
  const [active, setActive] = useState("top");
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (sectionsRef.current.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sectionsRef.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.wrap} aria-label="Section navigation">
      <div className={styles.bar}>
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`${styles.item} ${isActive ? styles.itemActive : ""}`}
              aria-current={isActive ? "true" : undefined}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {item.icon}
              </svg>
              <span className={styles.label}>{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
