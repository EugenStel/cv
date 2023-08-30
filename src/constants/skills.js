import html from '../components/skills/assets/html-5.png'
import css from '../components/skills/assets/css-3.png'
import js from '../components/skills/assets/js.png'
import react from '../components/skills/assets/atom.png'
import redux from '../components/skills/assets/redux.png'
import typescript from '../components/skills/assets/typescript.png'
import sass from '../components/skills/assets/sass.png'
import git from '../components/skills/assets/git.png'
import eng from '../components/skills/assets/eng.svg'
import ger from '../components/skills/assets/ger.svg'

export const SKILLS = {
    soft: [''],
    hard_new: [
        {
            name: 'HTML 5',
            description: 'HTML 5, flex, grid',
            icon: html,
            id: 0
        },
        {
            name: 'CSS 3',
            description: 'CSS 3, Sass',
            icon: css,
            id: 1
        },
        {
            name: 'Sass',
            description: 'Sass',
            icon: sass,
            id: 2
        },
        {
            name: 'JavaScript',
            description: 'ES6, basics, event loop, async/await, fetch, try/catch, functions, this, variables, hoisting',
            icon: js,
            id: 3
        },
        {
            name: 'TypeScript',
            description: 'TypeScript',
            icon: typescript,
            id: 4
        },
        {
            name: 'React',
            description: 'React, hooks, react-router-dom, axios, styled components, functional and class components, react-hook-form',
            icon: react,
            id: 5
        },
        {
            name: 'Redux',
            description: 'thunk, toolkit, saga, redux-dev-tools',
            icon: redux,
            id: 6
        },
        {
            name: 'Git',
            description: 'Git, clone, push, pull, commit, amend, pull request',
            icon: git,
            id: 7
        },
    ],
    laguages: [
        {
            language: 'english',
            icon: eng,
            level: 'B1',
            id: 11,
        },
        {
            language: 'german',
            icon: ger,
            level: 'A2',
            id: 22,
        },
    ]
}