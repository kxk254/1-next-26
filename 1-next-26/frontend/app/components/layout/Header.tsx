'use client';

import Link from "next/link";
import styles from "./styles/Header.module.css";
import { useState } from "react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		console.log(isOpen);
		setIsOpen(!isOpen);
	};

	return (

<header className={styles.header}>
    <a href="/" className={styles.logo}>Blue Mille Feuille</a>

    {/* Humberger Menu  */}
    <div className={`${styles.hamburger} ${isOpen ? styles.isActive : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
    </div>

    {/* Humberger Menu list-style */}
    <nav className={`${styles.navOverlay} ${isOpen ? styles.isOpen : ""}`} >
        <ul>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/about">ABOUT</Link></li>
            <li><a href="https://mdfshop.base.shop/" target="_blank">SHOP</a></li>
            <li><Link href="/contact">CONTACT</Link></li>
        </ul>
    </nav>


    {/* Desktop Screen Menu Bar  */}
    <nav className={styles.desktopnav}>
        <ul>
 	    <li><Link href="/">HOME</Link></li>
	    <li><Link href="/about">ABOUT</Link></li>
	    <li><a href="https://mdfshop.base.shop/" target="_blank">SHOP</a></li>
	    <li><Link href="/contact">CONTACT</Link></li>
        </ul>
    </nav>
</header>
	);
}
