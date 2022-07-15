import Head from "next/head";
import styles from "../styles/Sections.module.css";
import router, { useRouter } from "next/router";
import Image from "next/image";
import language from "../public/photos/languages.jpg";

export default function education() {
  /*const pathname = window.location.pathname;*/

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span>Other Skills</span>
        </h1>
        <div className={styles.quick_sum}>
          <p>
            Have other skills related to specific computer applications and
            spoken languages. Can edit many types of files and create images and
            audio files using professional tools.
          </p>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.container1}>
          <div className={styles.page_image_container}>
            <Image
              alt=""
              src="/photos/languages.jpg"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/photos/languages.jpg"
              className={styles.page_image2}
            ></Image>
            <div className={styles.banner}>
              <span> Languages</span>
            </div>
          </div>
          <div className={styles.paragraph_body_L}>
            <h2 className={styles.subtitle}>Languages</h2>
            <ul className={styles.list}>
              <li>English</li>
              <li>Arabic</li>
              <li>French. DELF B2</li>
              <li>Conversational Turkish</li>
            </ul>
            {/*<p>
              Fluent in both english and arabic. Recieved 110/120 on the TOEFL
              ibt exam in 2020. In addition, I also have conversational skills
              in both Turkish and French.
            </p>*/}
          </div>
        </div>

        <div className={styles.container2}>
          <div className={styles.paragraph_body_R}>
            <h2 className={styles.subtitle}>Microsoft Office</h2>
            <ul className={styles.list}>
              <p>Experience in:</p>
              <li>Word</li>
              <li>Powerpoint</li>
              <li>Excel</li>
            </ul>
            {/*<p>
              Porficient in Office programs such as microsoft word, powerpoint,
              and excel.
            </p>*/}
          </div>
          <div className={styles.page_image_container}>
            <Image
              alt=""
              src="/photos/office.jpg"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/photos/office.jpg"
              className={styles.page_image2}
            ></Image>
            <div className={styles.banner}>
              <span> Microsoft Office</span>
            </div>
          </div>
        </div>

        <div className={styles.container1}>
          <div className={styles.page_image_container}>
            <Image
              alt=""
              src="/photos/Adobe.jpg"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/photos/Adobe.jpg"
              className={styles.page_image2}
            ></Image>
            <div className={styles.banner}>
              <span> Adobe</span>
            </div>
          </div>
          <div className={styles.paragraph_body_L}>
            <h2 className={styles.subtitle}>Adobe Suite</h2>
            <ul className={styles.list}>
              <li>Photoshop</li>
              <li>After Effects</li>
              <li>Illustrator</li>
              <li>Audition</li>
            </ul>
            {/*<p>
              {" "}
              Have experience using different adobe programs. These include
              photoshop, After effects, Illustrator and adobe Audition.
            </p>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
