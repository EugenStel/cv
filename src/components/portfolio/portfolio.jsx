import { PortfolioItem } from './portfolio-item/portfolio-item'
import { PET } from '../../constants/pet'

import styles from './portfolio.module.css'

export const Portfolio = () => (
    <div className={styles.portfolio} id='port'>
        <h2 className={styles.portfolio_header}>
            <span className={styles.portfolio_header_span}>
                Portfolio
            </span>
        </h2>
        <div className={styles.portfolio_items}>
            {PET?.map((item) => (
                <PortfolioItem key={item.id} item={item} />
            ))}
        </div>
    </div>
)