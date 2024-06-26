import Head from "next/head";
import styles from "../styles/Sections.module.css";
import router, { useRouter } from "next/router";
import Image from "next/image";

export default function education() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span>Programming Languages</span>
        </h1>
        <div className={styles.quick_sum}>
          <p>
            Have strong foundations in all aspects of computer engineering. This
            includes learning different programming languages and paradigms.
          </p>
        </div>
      </div>
      <div className={styles.main}>
        <a
          rel="noopener noreferrer"
          href="https://github.com/Harsual"
          target="_blank"
          className={styles.container1}
        >
          <div className={styles.container1}>
            <div className={styles.page_image_container}>
              <Image
                alt=""
                src="/photos/c_languages1.jpg"
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                blurDataURL="/photos/c_language1.jpg"
                className={styles.page_image2}
              ></Image>
              <div className={styles.banner}>
                <span>Github</span>
              </div>
            </div>
            <div className={styles.paragraph_body_L}>
              <h2 className={styles.subtitle}>C languages</h2>
              <ul className={styles.list}>
                <li>OOP knowledge</li>
                <li>
                  Used languages in many university assignments and projects.
                </li>
              </ul>
            </div>
          </div>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://github.com/Harsual"
          target="_blank"
          className={styles.container2}
        >
          <div className={styles.container2}>
            <div className={styles.paragraph_body_R}>
              <h2 className={styles.subtitle}>Java</h2>
              <ul className={styles.list}>
                <p>Strong Background</p>
                <p>Previous Projects include:</p>
                <li>Personal Movie Cataloging Application</li>
                <li>LAN Movie streaming Application</li>
                <li>
                  Tool using Rest API calls to automatically update information
                  in MySQL database{" "}
                </li>
              </ul>
            </div>
            <div className={styles.page_image_container}>
              <Image
                alt=""
                src="/photos/Java.png"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/photos/Java.png"
                quality={40}
                className={styles.page_image2}
              ></Image>
              <div className={styles.banner}>
                <span> Github</span>
              </div>
            </div>
          </div>
        </a>

        <a
          rel="noopener noreferrer"
          href="https://github.com/Harsual"
          target="_blank"
          className={styles.container1}
        >
          <div className={styles.container1}>
            <div className={styles.page_image_container}>
              <Image
                alt=""
                src="/photos/Javascript.png"
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                blurDataURL="/photos/Javascript.png"
                quality={30}
                className={styles.page_image2}
              ></Image>
              <div className={styles.banner}>
                <span> Github</span>
              </div>
            </div>
            <div className={styles.paragraph_body_L}>
              <h2 className={styles.subtitle}>JavaScript</h2>
              <ul className={styles.list}>
                <p>Web development:</p>
                <li>React js</li>
                <li>Next js</li>
                <p>Cross platform app development:</p>
                <li>React Native</li>
              </ul>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
