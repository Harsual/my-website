import Head from "next/head";
import styles from "../styles/About.module.css";
import styles2 from "../styles/Sections.module.css";
import router, { useRouter } from "next/router";
import Image from "next/image";
import personalImage from "../public/photos/website_image.jpg";

export default function about() {
  /*document.addEventListener("DOMContentLoaded", function () {
    if (!window.AnimationEvent) {
      return;
    }
    var anchors = document.getElementsByTagName("a");

    for (var idx = 0; idx < anchors.length; idx += 1) {
      if (
        anchors[idx].hostname !== window.location.hostname ||
        anchors[idx].pathname === window.location.pathname
      ) {
        continue;
      }
    }

    anchors[idx].addEventListener("click", function (event) {
      var fader = document.getElementById("fader"),
        anchor = event.currentTarget;

      var listener = function () {
        window.location = anchor.href;
        fader.removeEventListener("animationend", listener);
      };
      fader.addEventListener("animationend", listener);

      event.preventDefault();

      fader.classList.add("fade-in");
    });
  });
  window.addEventListener("pageshow", function (event) {
    if (!event.persisted) {
      return;
    }
    var fader = document.getElementById("fader");
    fader.classList.remove("fade-in");
  });

  const fadeInPage = () => {
    if (!window.AnimationEvent) {
      return;
    }
    var fader = document.getElementById("fader");
    fader.classList.add("fade-out");
  };*/

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span>About Me</span>
      </h1>

      <div className={styles.about_container}>
        <div className={styles.image_container}>
          <Image
            alt=""
            src={require("/photos/website_image.jpg")}
            layout="fill"
            objectFit="contain"
            placeholder="blur"
            blurDataURL="/photos/website_image.jpg"
          ></Image>
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
