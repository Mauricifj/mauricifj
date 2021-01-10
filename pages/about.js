import Link from 'next/link';

import styles from '../styles/About.module.css'

function About () {
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <h1>About</h1>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </section>
            <section className={styles.section}></section>
        </div>
    );
}

export default About;