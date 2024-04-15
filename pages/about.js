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
          <Image
          alt=""
          src="/photos/headshot.jpeg"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL="/photos/headshot.jpeg"
          ></Image>
          
        </div>
        <div className={styles.about_paragraph}>
          
          <p>
          Hello website visitor,
          </p>


          <p>
          My name is Osama Nori. I am a Computer Engineer, Software Engineer and Web Developer. Experienced Java and Javascript developer. Knowledgable in python, R, and C++.
          </p>

          <p>
          Creator of Yemenflix and the game Continuous.
          </p>

          <p>
          Figuring out ways to innovate and excel through hard work coupled with efficiency.
          Determined to make something great and making an impact.
          </p>

          <p>
          I love coding, solving problems, and learning how things work from A to Z.
          </p>

          <p style={{ marginTop: "3rem" }}>
          <span className= {styles.quote}> “Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.” </span>
              - Paul J Meyers
          </p>
        
          












          
        </div>
      </div>
    </div>
  );
}
