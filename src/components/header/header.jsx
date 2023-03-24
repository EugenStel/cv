import { Logo } from '../logo/logo'
import { HeaderLinks } from './header-links/header-links'
import { Menu } from '../menu/menu'

import styles from './header.module.css'

export const Header = () => (
    <header className={styles.header}>
        <Logo />
        <Menu />
        <HeaderLinks />
    </header>
)
