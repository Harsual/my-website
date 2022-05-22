import Head from "next/head";
import styles from "../styles/Sections.module.css";
import router, { useRouter } from "next/router";
import Image from "next/image";

export default function education() {
  /*const pathname = window.location.pathname;*/

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
          href="https://github.com/Harsual/TaskReview"
          target="_blank"
          className={styles.container1}
        >
          <div className={styles.container1}>
            <div className={styles.page_image_container}>
              <Image
                src="/photos/Progress_App.jpg"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/photos/Progress_App.jpg"
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
              {/*<p>
              {" "}
              Created a productivity app to track my progress in improving
              different aspects of life. Learnt a lot of useful information
              regarding multiplatform programming.
            </p>*/}
            </div>
          </div>
        </a>

        <a
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
              {/*<p>
              I have more experience in android development as I made multiple
              apps using Java and android studio IDE. One of the apps was a
              movie list app where movies are listed based on my personal
              preference for them, (rated from 0 to 10). It utilized a specific
              algorithm to push some movies on top and as time goes by some to
              the bottom of that list. For my graduation project I also
              developed a movie streaming application where movies are streamed
              using a local network server.
            </p>*/}
            </div>
            <div className={styles.page_image_container}>
              <Image
                src="/photos/LAN_streaming.png"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/photos/LAN_streaming.png"
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
