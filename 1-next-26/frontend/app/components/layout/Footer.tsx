"use client";
import Link from "next/link";
import styles from "./styles/Footer.module.css";

export default function Footer() {
  console.log("STYLES:", styles);
  return (
    <div className={styles.footer}>
      <div className={styles.socialLinks}>
        <a
          href="https://www.instagram.com/bluemillefeuille2001"
          target="_blank"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
            alt="Instagram"
            width="24"
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100070949671198"
          target="_blank"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png"
            alt="Facebook"
            width="24"
          />
        </a>
        <a href="https://mdfshop.base.shop" target="_blank">
          <img src="/base-icon.png" alt="BASE" width="24" />
        </a>
      </div>
      <div className={styles.footerLinks}>
        <Link href="/about" className={styles.footerNav}>
          ABOUT
        </Link>
        <Link href="/contact" className={styles.footerNav}>
          CONTACT
        </Link>
      </div>
      <p>&copy; 2025 Blue Mille Feuille All Rights Reserved.</p>
    </div>
  );
}
