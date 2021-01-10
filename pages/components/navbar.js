import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'

let darkMode = true;

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar_nav}>
                <li className={styles.logo}>
                    <Link href="/">
                        <a className={styles.nav_link}>
                            <svg>
                                <image href="m.svg" />
                            </svg>
                            <span className={styles.link_text}>MAURICIFJ</span>
                        </a>
                    </Link>
                </li>
                <li className={styles.nav_item}>
                    <Link href="/about">
                        <a className={styles.nav_link}>
                            <i className="fas fa-user-astronaut"></i>
                            <span className={styles.link_text}>About me</span>
                        </a>
                    </Link>
                </li>
                <li className={styles.nav_item}>
                    <Link href="/portfolio">
                        <a className={styles.nav_link}>
                            <i className="fas fa-book-open"></i>
                            <span className={styles.link_text}>Portfolio</span>
                        </a>
                    </Link>
                </li>
                <li className={styles.nav_item}>
                    <Link href="/education">
                        <a className={styles.nav_link}>
                            <i className="fas fa-graduation-cap"></i>
                            <span className={styles.link_text}>Education</span>
                        </a>
                    </Link>
                </li>
                <li className={styles.nav_item}>
                    <Link href="/experience">
                        <a className={styles.nav_link}>
                            <i className="fas fa-space-shuttle"></i>
                            <span className={styles.link_text}>Experience</span>
                        </a>
                    </Link>
                </li>
                <li className={styles.nav_item}>
                    <a id="themeButton" onClick={themeChange} href="#" className={styles.nav_link}>
                        <i className={darkMode ? 'fas fa-moon' : 'fas fa-sun'}></i>
                        <span className={styles.link_text}>Theme</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

const themeChange = () => {
    let root = document.documentElement
    let button = root.querySelector("#themeButton");
    let icon = button.querySelector("svg");

    if(darkMode) {
        root.style.setProperty('--text-primary', '#23232e');
        root.style.setProperty('--text-secondary', '#141418');
        root.style.setProperty('--bg-primary', '#b6b6b6');
        root.style.setProperty('--bg-secondary', '#ececec');
        root.style.setProperty('--opacity', '1');

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        root.style.setProperty('--text-primary', '#b6b6b6');
        root.style.setProperty('--text-secondary', '#ececec');
        root.style.setProperty('--bg-primary', '#23232e');
        root.style.setProperty('--bg-secondary', '#141418');
        root.style.setProperty('--opacity', '0.5');

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

    darkMode = !darkMode;
}

