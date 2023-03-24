import { PERSONAL_INFO } from './about'
import linkedin from '../components/header/header-links/assets/linkedin_icon.svg'
import github from '../components/header/header-links/assets/github_icon.svg'

export const HEADER_ICONS = [
    {
        label: 'linkedin',
        img: linkedin,
        link: PERSONAL_INFO.linkedin,
        id: 1,
    },
    {
        label: 'github',
        img: github,
        link: PERSONAL_INFO.github,
        id: 2,
    },
]