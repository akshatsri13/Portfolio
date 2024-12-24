import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Akshat</h1>
        <p className={styles.description}>
        I'm a passionate full-stack developer with expertise in the MERN stack. I focus on building real-world projects and contributing my knowledge. Feel free to reach out to learn more!
        </p>
        <a href="mailto:srivastavaakshat022@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Akshat.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
