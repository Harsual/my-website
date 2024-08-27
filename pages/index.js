import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Osama Nori Portfolio Website</title>
        <meta name="description" content="website"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Osama Nori Portfolio Website</h1>
      <h2 className={styles.note}>
        Built from scratch in React and Next. Not a template. Inspired by
        corporate and functional designs. Stock photo rights belong to their
        respective owners.
      </h2>

      <div className={styles.imageGallery}>
        <Link legacyBehavior href="/education" scroll={false}>
          <a className={styles.img_1}>
            <text>Education</text>
          </a>
        </Link>
        <Link legacyBehavior href="/web_development" scroll={false}>
          <a className={styles.img_2}>
            <text>Web Development</text>
          </a>
        </Link>
        <Link legacyBehavior href="/programming_languages" scroll={false}>
          <a className={styles.img_3}>
            <text>Programming Languages</text>
          </a>
        </Link>
        <Link legacyBehavior href="/game_development" scroll={false}>
          <a className={styles.img_4}>
            <text>Game Development</text>
          </a>
        </Link>
        <Link legacyBehavior href="/mobile_development" scroll={false}>
          <a className={styles.img_5}>
            <text>Mobile Development</text>
          </a>
        </Link>
        <Link legacyBehavior href="/other_skills" scroll={false}>
          <a className={styles.img_6}>
            <text>Other Skills</text>
          </a>
        </Link>
      </div>
    </div>
  );
}
