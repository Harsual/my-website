import Head from "next/head";
import styles from "../styles/Sections.module.css";
import router, { useRouter } from "next/router";
import Image from "next/image";
import { useEffect } from "react";

export default function education() {
  /*const pathname = window.location.pathname;*/

  /*useEffect(() => {
    window.scrollTo(0, 0);
  }, []);*/
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span>Education</span>
        </h1>
        <div className={styles.quick_sum}>
          <p>
            Have studied at excellent institutions. These experiences were a
            stepping stone for my professional succcess
          </p>
        </div>
      </div>
      <div className={styles.main}>
        <a
          rel="noopener noreferrer"
          href="https://www.mun.ca"
          target="_blank"
          className={styles.container1}
        >
          <div className={styles.page_image_container}>
            <Image
              alt=""
              src="/photos/mun.jpg"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/photos/mun.jpg"
              className={styles.page_image2}
            ></Image>
            <div className={styles.banner}>
              <span> University Website</span>
            </div>
          </div>
          <div className={styles.paragraph_body_L}>
            <h2 className={styles.subtitle}>Memorial University</h2>
            <ul className={styles.list}>
              <li>Masters in Computer science</li>
              <li>Attending currently</li>
            </ul>
            {/* <p>
              {" "}
              Currently in a master's program in computer science at Memorial University of Newfoundland and Labrador. Planning to graduate in 2023.
           </p>*/}
          </div>
        </a>

        <a
          rel="noopener noreferrer"
          href="https://en.ankara.edu.tr/"
          target="_blank"
          className={styles.container2}
        >
          <div className={styles.container2}>
            <div className={styles.paragraph_body_R}>
              <h2 className={styles.subtitle}>Ankara University</h2>
              <ul className={styles.list}>
                <li>Computer Engineering</li>
                <li>Degree of Bachlor of science</li>
              </ul>
              {/*<p>
                Finished an undergraduate degree in Computer engineering from
                one of Turkey's top universities. This experience gave me a
                strong foundation in all aspects of Designing and implementing
                computer applications.
              </p>*/}
            </div>
            <div className={styles.page_image_container}>
              <Image
                alt=""
                src="/photos/ankara_university.jpg"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/photos/ankara_university.jpg"
                className={styles.page_image2}
              ></Image>
              <div className={styles.banner}>
                <span> University Website</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
