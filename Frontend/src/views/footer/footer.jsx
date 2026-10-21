import styles from "./footer.module.css"
export function End() {
    return (
        <article className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerHeader}>
                    <h4>Contact: </h4>
                </div>
                <div className={styles.footerContent}>
                    <p>+31 6 12345678</p>
                    <p>Email@Email.com</p>
                </div>
            </div>
            <div className={styles.footerContainer}>
                <div className={styles.footerHeader}>
                    <h4>Disclaimer: </h4>
                </div>
                <div className={styles.footerContent}>
                    <p>©</p>
                    <p>Email@Email.com</p>
                </div>
            </div>
        </article>
    )
}