import styles from "../components/layout/styles/Contact.module.css";
import Header from "../components/layout/Header.tsx";
import Footer from "../components/layout/Footer.tsx";

export default function Contact() {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <span className={styles.sectionTitle}>Contact</span>

        <div className={styles.directContact}>
          <p>お問い合わせはこちら</p>
          <div>
            Email:{" "}
            <a href="mailto:bmflower2001@gmail.com">bmflower2001@gmail.com</a>
          </div>
          <div>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/bluemillefeuille2001"
              target="_blank"
            >
              @bluemillefeuille2001
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
