import { NAV } from '../../constants/nav'
import styles from './menu.module.css'

export const Menu = () => (
    <nav className={styles.menu}>
        <ul className={styles.menu_list}>
            {NAV?.map(({id, href, title, icon}) => (
                <li className={styles.menu_list_item} key={id}>
                    <a href={`#${href}`} className={styles.menu_item_link}>{title}</a>
                    <a href={`#${href}`} className={styles.menu_item_link_icon}>
                        <img src={icon} alt={icon} className={styles.menu_item_img}/>
                    </a>
                </li>
            ))}
        </ul>
    </nav>
)
