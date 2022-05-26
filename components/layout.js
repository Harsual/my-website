import styles from "../styles/Layout.module.css";
import styles2 from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  //const [displayChildren, setDisplayChildren] = useState(children);
  /*const [transitionStage, setTransitionStage] = useState("fadeOut");

  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage("fadeOut");
  }, [children, setDisplayChildren, displayChildren]);
*/
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  const router = useRouter();

  return (
    <div className={styles.page_container}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          {/*<a className={styles.navlogo}>[BrandLogo]</a>*/}
          <div className={styles.navlogo}>
            <Link href="/">
              <a>
                <Image src="/color_logo.png" width={75} height={75} />
              </a>
            </Link>
          </div>
          <ul
            className={
              isOpen === false
                ? styles.navmenu
                : styles.navmenu + " " + styles.active
            }
          >
            <li className={styles.navitem}>
              <Link href="/" scroll={false}>
                <a className={styles.navlink}>Home</a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/about" scroll={false}>
                <a className={styles.navlink}>About</a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/contact" scroll={false}>
                <a className={styles.navlink}>Contact</a>
              </Link>
            </li>
          </ul>
          <button
            className={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + " " + styles.active
            }
            onClick={openMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>
      {/*<div className={styles.content_wrap}>*/}
      <div
      /*onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            console.log("fading out");
            setDisplayChildren(children);
            setTransitionStage("fadeIn");
          }
        }}*/
      >
        {children}
      </div>

      <div className={styles.prefooter}>
        <div className={styles.linkbox}>
          {/*className={router.pathname == "/" ? styles.active : ""}*/}

          <Link href="/" scroll={false}>
            <a className={router.pathname == "/" ? styles.active : ""}>Home</a>
          </Link>

          <Link href="/education" scroll={false}>
            <a className={router.pathname == "/education" ? styles.active : ""}>
              Education
            </a>
          </Link>
          <Link href="/web_development" scroll={false}>
            <a
              className={
                router.pathname == "/web_development" ? styles.active : ""
              }
            >
              Web Development
            </a>
          </Link>
          <Link href="/programming_languages" scroll={false}>
            <a
              className={
                router.pathname == "/programming_languages" ? styles.active : ""
              }
            >
              Programming Languages
            </a>
          </Link>
          <Link href="/game_development" scroll={false}>
            <a
              className={
                router.pathname == "/game_development" ? styles.active : ""
              }
            >
              Game Development
            </a>
          </Link>
          <Link href="/mobile_development" scroll={false}>
            <a
              className={
                router.pathname == "/mobile_development" ? styles.active : ""
              }
            >
              Mobile Development
            </a>
          </Link>
          <Link href="/other_skills" scroll={false}>
            <a
              className={
                router.pathname == "/other_skills" ? styles.active : ""
              }
            >
              Other Skills
            </a>
          </Link>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <Link href="/" scroll={false}>
            <a>
              <Image src="/White_logo.png" width={75} height={75} />
            </a>
          </Link>
        </div>
        <div className={styles.footer_container1}>
          <div className={styles.ftd}>
            <text className={styles.ftd_text}>
              Working with motivated and hard working individuals is my passion
              <br></br>
            </text>
            <text className={styles.ftd_text}>
              I'd love to build something great together.{" "}
            </text>
            <br></br>
            <Link href="/contact" scroll={false}>
              <a>
                <br></br>
                <text className={styles.work_link}>Work with me </text>
              </a>
            </Link>
            <div className={styles.contact}>
              <div className={styles.info}>
                <div className={styles.info_container}>
                  <text>Email</text>
                </div>
                <text className={styles.contact_info}>onori273@gmail.com</text>
              </div>

              <div className={styles.info}>
                <div className={styles.info_container}>
                  <text>Phone</text>
                </div>
                <text className={styles.contact_info}>+1 709 728 2044</text>
              </div>

              <div className={styles.info}>
                <div className={styles.info_container}>
                  <text>Social</text>
                </div>
                <div className={styles.social}>
                  <Link href="https://twitter.com/onori27">
                    <a className={styles.s_logos}>
                      <Image
                        src="/socialMedia_logos/twitter.png"
                        width={45}
                        height={45}
                      />
                    </a>
                  </Link>
                  <Link href="https://www.linkedin.com/in/osamanori/">
                    <a className={styles.s_logos}>
                      <Image
                        src="/socialMedia_logos/linkedin.png"
                        width={45}
                        height={45}
                      />
                    </a>
                  </Link>
                  <Link href="https://github.com/Harsual">
                    <a className={styles.s_logos}>
                      <Image
                        src="/socialMedia_logos/github.png"
                        width={45}
                        height={45}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* add link to contact page here*/}
      </footer>

      {/*footer*/}
    </div>
  );
}
