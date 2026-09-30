import { useState } from "react"
import styles from './home.module.css'
export function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    console.log(menuOpen);

    function openMenu() {
        if (menuOpen == false) {
            setMenuOpen(true);
        } else {
            setMenuOpen(false)
        }
    }

    function Navbar() {
        return (
            <nav className={styles.navbar}>
                <HamburgerMenu />
                <button onClick={() => openMenu()} className={styles.navbarButton}>Open</button>
            </nav>
        )
    }

    function HamburgerMenu() {
        if (menuOpen == true) {
            return (
                <div className={styles.navbarContent}>
                    <a href="#" className={styles.navbarItem}>Home</a>
                    <a href="#"className={styles.navbarItem}>3D Art</a>
                    <a href="#" className={styles.navbarItem}>2D Art</a>
                    <a href="#" className={styles.navbarItem}>Schilderijen</a>
                    <a href="#" className={styles.navbarItem}>Contact</a>
                </div>
            )
        }

    }

    return (
        <header>
            <Navbar />
            <div className={styles.headerContent}>
                <h1>Lisa van Boven</h1>
                <h2>Artist</h2>
            </div>
        </header>
    )
}