import { HEADER_ICONS } from '../../../constants/header-icons'

import styles from './header-links.module.css'

export const HeaderLinks = () => (
    <div className={styles.header_icons}>
        {HEADER_ICONS.map((icon) => (
            <a href={icon.link} key={icon.id} target='_blank' rel='noopener noreferrer'>
                <img src={icon.img} alt={icon.label} className={styles.header_icons_links} />
            </a>
        ))}
    </div>
)