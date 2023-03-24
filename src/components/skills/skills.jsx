import { Langueages } from '../languages/languages'
import { SkillItem } from './skill-item/skill-item'
import { SKILLS } from '../../constants/skills'

import styles from './skills.module.css'

export const Skills = () => (
    <div className={styles.skills} id='skills'>
        <h2 className={styles.skills_header}>
            <span className={styles.skills_header_span}>
                Skills
            </span>
        </h2>
        <div className={styles.skills_wrapper}>
            {SKILLS.hard_new.map((item) => (
                <SkillItem key={item.id} item={item} />
            ))}
        </div>
        <Langueages />
    </div>
)
