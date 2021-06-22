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
                    <br/>
                    <div class={styles.social_mediar_bar}>
                        <a href="https://www.linkedin.com/in/mauricifj/" class="linkedin" target="_blank"><i class="fa fa-linkedin"></i></a>
                        <a href="https://github.com/mauricifj/" class="github" target="_blank"><i class="fa fa-github-square"></i></a>
                    </div>
                </div>
            </main>
        </div>
    );
}