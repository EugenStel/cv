import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { ICON_STYLES } from '../../constants/timeline-icon-styles'
import { EDUCATION } from '../../constants/education'
import { ReactComponent as EducationIcon } from './assets/education.svg'

import 'react-vertical-timeline-component/style.min.css'
import styles from './education.module.css'

export const Education = () => (
    <div className={styles.education} id='edu'>
        <h2 className={styles.edu_header}>
            <span className={styles.edu_header_span}>Education</span>
        </h2>
        <VerticalTimeline>
            {EDUCATION.map((item) => (
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date={item.years}
                    iconStyle={ICON_STYLES.educationIconStyles}
                    icon={<EducationIcon />}
                    key={item.id}
                >
                    <h3 className={styles.vertical_timeline_element_title}>{item.place_of_study}</h3>
                    <h4 className={styles.vertical_timeline_element_subtitle}>{item.major}</h4>
                    {item?.cert &&
                        <a href={item.cert} target='_blank' rel="noreferrer" className={styles.down_link_cert}>
                            <button type='button' className={styles.download_cert}>Show certificate</button>
                        </a>
                    }
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    </div>
)