import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { ReactComponent as WorkIcon } from './assets/worker.svg'
import { WORK_EXPERIENCE } from '../../constants/work'
import { ICON_STYLES } from '../../constants/timeline-icon-styles'

import 'react-vertical-timeline-component/style.min.css'
import styles from './work-experience.module.css'

export const WorkExperience = () => (
    <div className={styles.work} id='work'>
        <h2 className={styles.work_header}>
            <span className={styles.work_header_span}>
                Work experience
            </span>
        </h2>
        <VerticalTimeline>
            {WORK_EXPERIENCE.map((item) => (
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date={`${item.from} - ${item.to}`}
                    iconStyle={ICON_STYLES.workIconStyles}
                    icon={<WorkIcon style={{ filter: 'invert(1)' }} />}
                    key={item.id}
                >
                    <h3 className={styles.vertical_timeline_element_title}>{item.organization}</h3>
                    <h4 className={styles.vertical_timeline_element_subtitle}>{item.position}</h4>
                    <ul className={styles.resp_list}>
                        {item.responsibilities?.map((resp, index) => (
                            <li key={index} className={styles.resp_item}>{resp}</li>
                        ))}
                    </ul>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    </div>
)
