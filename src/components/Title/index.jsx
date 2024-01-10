/* eslint-disable react/prop-types */
import styles from "./styles.module.css"

export default function Title ({text}) {
    return (
        <h2 className={styles.textClass}>{text}</h2>
    )
}