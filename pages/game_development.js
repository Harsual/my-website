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
          <span>Game Development</span>
        </h1>
        <div className={styles.quick_sum}>
          <p>
            Taught myself the basics of game development. Learnt all the
            different aspects of what is required to create a game.
          </p>
        </div>
      </div>
      <div className={styles.main}>
        <a
          href="https://play.google.com/store/apps/details?id=com.OsamaNori.Continuous&hl=us&gl=US"
          target="_blank"
          className={styles.container1}
        >
          <div className={styles.page_image_container}>
            <Image
              src="/photos/unity.png"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/photos/unity.png"
              className={styles.page_image2}
            ></Image>
            <div className={styles.banner}>
              <span> Game page</span>
            </div>
          </div>
          <div className={styles.paragraph_body_L}>
            <h2 className={styles.subtitle}>Unity</h2>
            <ul className={styles.list}>
              <li>Google play integration</li>
              <li>C#</li>
              <li>Animation</li>
              <li>Asset creation</li>
              <li>Sound design</li>
            </ul>
            {/*<p>
              {" "}
              Have released a game on the google play store that was built using
              the unity engine.I learnt different aspects of game development
              from content creation to animation and of course programming. The
              game was built using c#.
            </p>*/}
          </div>
        </a>

        <a
          href="https://github.com/Harsual/ThirdPerson-4.23"
          target="_blank"
          className={styles.container2}
        >
          <div className={styles.paragraph_body_R}>
            <h2 className={styles.subtitle}>Unreal Engine</h2>
            <ul className={styles.list}>
              <li>C++</li>
              <li>Built prototypes</li>
              <li>Game ideas</li>
              <li>3D game development</li>
              <li>3D animation</li>
            </ul>
            {/*<p>
              Have built different prototypes and gameplay ideas using the
              blueprint feature of unreal. I learnt different aspects of 3d game
              development such as calculating vectors, terrain creation, and 3d
              based animations.
            </p>*/}
          </div>
          <div className={styles.page_image_container}>
            <Image
              src="/photos/unreal.jpg"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/photos/unreal.jpg"
              className={styles.page_image2}
            ></Image>
            <div className={styles.banner}>
              <span> Github repo</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
