import styles from './skill-item.module.css'

export const SkillItem = ({ item: { name, icon } }) => {

    return (
        <div className={styles.skills_item}>
            <img
                src={icon}
                alt={name}
                style={{ width: '60px', height: 'auto' }}
            />
            <div className={styles.skills_item_info}>
                {name}
            </div>
        </div>
    )
}