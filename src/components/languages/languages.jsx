import { SKILLS } from '../../constants/skills'
import { LanuageItem } from './language-item/language-item'

import styles from './languages.module.css'

export const Langueages = () => (
    <div className={styles.lang}>
        <h2 className={styles.lang_header}>
            <span className={styles.lang_header_span}>
                Languages
            </span>
        </h2>
        <div className={styles.languages}>
            {SKILLS.laguages.map(({ icon, language, level, id }) => (
                <LanuageItem key={id} icon={icon} language={language} level={level} />
            ))}
        </div>
    </div>
)
