"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./ScrollableImage.module.css";

export default function ScrollableImage({ src, alt, width, height, sizes }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);
  const isTall = height / width > 1.15;

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function handleClose() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <>
      <button
        type="button"
        ref={triggerRef}
        className={styles.trigger}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-label={`Enlarge image: ${alt}`}
      >
        <div className={`${styles.scrollBox} ${isTall ? "" : styles.scrollBoxCenter}`}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            className={styles.img}
          />
        </div>
        <span className={styles.hint} aria-hidden="true">
          Click to enlarge
        </span>
        {isTall && (
          <span className={styles.scrollHint} aria-hidden="true">
            Scroll to view
          </span>
        )}
      </button>

      {open && (
        <div
          className={styles.backdrop}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <button
            type="button"
            ref={closeRef}
            className={styles.close}
            onClick={handleClose}
            aria-label="Close image"
          >
            ×
          </button>
          <div className={styles.lightboxFrame}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes="(min-width: 1000px) 900px, 92vw"
              className={styles.lightboxImg}
            />
          </div>
        </div>
      )}
    </>
  );
}
