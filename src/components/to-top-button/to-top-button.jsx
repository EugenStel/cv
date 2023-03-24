import { FaArrowUp } from "react-icons/fa"

import styles from './to-top-button.module.css'

export const ToTopButton = () => {

    const toTopHandler = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div className={styles.to_top} onClick={toTopHandler}>
            <FaArrowUp color="#ffffff"/>
        </div>
    )
}

