import Intro from "../Intro/Intro"
import styles from './Header.module.css'

export default function Header() {

    const title = 'DEV Library';

    return (
        <>
            <div className={styles.header}>
                <h1>{title}</h1>
                <Intro />
            </div>
            <hr/>
        </>
    )
}

