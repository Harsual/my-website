import Head from "next/head";
import styles from "../styles/Sections.module.css";
import router, { useRouter } from "next/router";
import Image from "next/image";

export default function education() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span>Mobile Development</span>
        </h1>
        <div className={styles.quick_sum}>
          <p>
            Proficient in Mobile Development for Android and cross-platform.
          </p>
        </div>
      </div>
      <div className={styles.main}>
        <a
          rel="noopener noreferrer"
          href="https://github.com/Harsual/TaskReview"
          target="_blank"
          className={styles.container1}
        >
          <div className={styles.container1}>
            <div className={styles.page_image_container}>
              <Image
                alt=""
                src="/photos/progress_app.jpg"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/photos/progress_app.jpg"
                className={styles.page_image2}
              ></Image>
              <div className={styles.banner}>
                <span> Github repo</span>
              </div>
            </div>
            <div className={styles.paragraph_body_L}>
              <h2 className={styles.subtitle}>React Native</h2>
              <ul className={styles.list}>
                <li>Created app to track progress for different goals</li>
                <li>cross-platform programming</li>
              </ul>
            </div>
          </div>
        </a>

        <a
          rel="noopener noreferrer"
          href="https://github.com/Harsual/Streaming-Android-Application"
          target="_blank"
          className={styles.container2}
        >
          <div className={styles.container2}>
            <div className={styles.paragraph_body_R}>
              <h2 className={styles.subtitle}>Android</h2>
              <ul className={styles.list}>
                <li>Android Studio</li>
                <li>Java</li>
                <li>LAN movie streaming application</li>
                <li>Personalized movie Cataloging Application</li>
              </ul>
            </div>
            <div className={styles.page_image_container}>
              <Image
                alt=""
                src="/photos/lan_streaming.png"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/photos/lan_streaming.png"
                className={styles.page_image2}
              ></Image>
              <div className={styles.banner}>
                <span> Github repo</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
