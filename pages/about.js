import Head from "next/head";
import styles from "../styles/About.module.css";
import styles2 from "../styles/Sections.module.css";
import router, { useRouter } from "next/router";
import Image from "next/image";


export default function about() {
  

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span>About Me</span>
      </h1>

      <div className={styles.about_container}>
        <div className={styles.image_container}>
          
        </div>
        <div className={styles.about_paragraph}>
          <p>
            Hello, Im Osama Nori! Im a computer science graduate student, web
            developer, and an all-round programmer looking to break into the
            software development sector. Through my education and building
            personal projects, I have experience with multiple programming
            languages and frameworks. I thoroughly enjoy building apps and
            websites that tackle challenges faced in everyday life. Ive worked
            as a web-developer and interned as an android app developer after
            getting my bachelors degree in computer engineering. While my
            professional experience is limited, I have developed key skills and
            attributes that will ensure my development and success.
          </p>
        </div>
      </div>
    </div>
  );
}
