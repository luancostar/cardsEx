import styles from "./styles.module.css"

// eslint-disable-next-line react/prop-types
export default function Button ({btnText}) {
    return (
        <button className={styles.btnSession}>{btnText}</button>
    )
}