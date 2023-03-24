import movieImg from '../components/portfolio/assets/movies.png'
import cleverImg from '../components/portfolio/assets/clevershop.png'
import weatherImg from '../components/portfolio/assets/weather.png'
import gameImg from '../components/portfolio/assets/game.png'

export const PET = [
    {
        title: 'Movies app',
        desc: '',
        tech: ['React', 'Axios', 'sass', 'react router dom', 'swiper', 'uuid'],
        demo_link: 'https://my-films.netlify.app/',
        github_link: 'https://github.com/EugenStel/movies',
        img: movieImg,
        id: 1
    },
    {
        title: 'Emoji game',
        desc: '',
        tech: ['React', 'react router dom', 'fetch'],
        demo_link: 'https://game-emoji.netlify.app/',
        github_link: 'https://github.com/EugenStel/emojigame',
        img: gameImg,
        id: 2
    },
    {
        title: 'Weather app',
        desc: '',
        tech: ['React'],
        demo_link: 'https://wfapp.netlify.app/',
        github_link: 'https://github.com/EugenStel/weather',
        img: weatherImg,
        id: 3
    },
    {
        title: 'CleverShop',
        desc: '',
        tech: ['React', 'Axios', 'Swiper', 'Redux', 'redux thunk', 'prop-types', 'formik', 'react maskinput', 'react router dom', 'sass', 'yup'],
        demo_link: 'https://eugenstel.github.io/training-shop/#/',
        github_link: 'https://github.com/EugenStel/training-shop',
        img: cleverImg,
        id: 4
    },
]