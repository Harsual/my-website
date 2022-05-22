import Head from "next/head";
import styles from "../styles/Sections.module.css";
import router, { useRouter } from "next/router";
import Image from "next/image";

export default function web_development() {
  /*const pathname = window.location.pathname;*/

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span>Web Development</span>
        </h1>
        <div className={styles.quick_sum}>
          <p>
            Have developed websites using HTML, JavaScript, and CSS. Also have
            experience with editing pre-built websites.
          </p>
        </div>
      </div>
      <div className={styles.main}>
        <a href="/" target="_blank" className={styles.container1}>
          <div className={styles.container1}>
            <div className={styles.page_image_container}>
              <Image
                src="/photos/nextjs-logo.jpg"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/photos/nextjs-logo.jpg"
                className={styles.page_image2}
              ></Image>
              <div className={styles.banner}>
                <span> Website</span>
              </div>
            </div>
            <div className={styles.paragraph_body_L}>
              <h2 className={styles.subtitle}>Next.js</h2>
              <ul className={styles.list}>
                <li>Current Website built on Next.js </li>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>CSS</li>
              </ul>
              {/*<p>
              {" "}
              This website is built using the next.js framework. It required
              extensive knowledge in javascript and css.
            </p>*/}
            </div>
          </div>
        </a>
        <a
          href="https://www.greenplatecars.com/"
          target="_blank"
          className={styles.container2}
        >
          <div className={styles.container2}>
            <div className={styles.paragraph_body_R}>
              <h2 className={styles.subtitle}>WordPress</h2>
              <ul className={styles.list}>
                <li>Edited Code of 3rd party theme.</li>
                <li>PHP</li>
                <li>SEO</li>
              </ul>
              {/*<p>
              Edited code of a wordpress website built using a 3rd party theme.
              This required extensive knowledge of php and the skill to read
              code and edit it without effecting the live website.
            </p>*/}
            </div>
            <div className={styles.page_image_container}>
              <Image
                src="/photos/wordpress.jpg"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/photos/wordpress.jpg"
                className={styles.page_image2}
              ></Image>
              <div className={styles.banner}>
                <span> Website</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
