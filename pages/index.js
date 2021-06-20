import Meta from "./components/meta";
import Navbar from "./components/navbar";
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Meta />

            <Navbar />

            <main className={styles.content}>
                <div className={styles.profile_description}>
                    <h1 className={styles.profile_description_headline}>Hi, I'm Maurici</h1>
                    <p className={styles.profile_description_}>Web and mobile developer</p>
                </div>
            </main>
        </div>
    );
}