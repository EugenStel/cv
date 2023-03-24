import styles from './language-item.module.css'

export const LanuageItem = ({ icon, language, level }) => (
    <div className={styles.languages_item}>
        <p className={styles.languages_item_title}>
            {language} - <span className={styles.languages_item_level}>{level}</span>
        </p>
        <img src={icon} alt={language} className={styles.language_icon} />
    </div>
)
