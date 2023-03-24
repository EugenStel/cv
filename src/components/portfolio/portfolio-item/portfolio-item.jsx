import { useInView } from 'react-intersection-observer'

import styles from './portfolio-item.module.css'

export const PortfolioItem = ({ item: { title, demo_link, github_link, img } }) => {
    const { ref, inView } = useInView({
        threshold: 0,
    })
    
    return (
        <div className={inView ? `${styles.portfolio_item} ${styles.portfolio_item_active}` : `${styles.portfolio_item}`} ref={ref}>
            <h2 className={styles.portfolio_title}>{title}</h2>
            <img src={img} alt={img} className={styles.portfolio_image} />
            <div className={styles.portfolio_links}>
                <a href={demo_link} className={styles.portfolio_link} target='_blank' rel="noreferrer">Live</a>
                <a href={github_link} className={styles.portfolio_link} target='_blank' rel="noreferrer">Source</a>
            </div>
        </div>
    )
}