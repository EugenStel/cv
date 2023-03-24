import { FaViber, FaTelegram, FaLinkedin, FaSkype } from "react-icons/fa"
import { MdOutgoingMail } from "react-icons/md"
import { BsTelephone } from "react-icons/bs"

import { PERSONAL_INFO } from '../../constants/about'

import styles from './about.module.css'

export const About = () => (
    <div className={styles.about}>
        <div className={styles.main}>
            <p className={styles.fio}><span className={styles.greet}>Hi,</span> I'm {PERSONAL_INFO.name} {PERSONAL_INFO.surname}</p>
            <p className={styles.fio}>
                <span className={styles.front}>Front-end</span> developer
            </p>
            <p className={styles.info}>{PERSONAL_INFO.info}</p>
            <p className={styles.add_info}>{PERSONAL_INFO.additional_info}</p>
            
            <div className={styles.about_contact}>
                Contacts: 
                <a href={`viber://chat?number=%2B${PERSONAL_INFO.viber}`} className={styles.contact_link}>
                    <FaViber size='40px' className={styles.contact_icon_viber} />
                </a>
                <a href={`${PERSONAL_INFO.tg}`} className={styles.contact_link}>
                    <FaTelegram size='40px' className={styles.contact_icon_telegram} />
                </a>
                <a href={`${PERSONAL_INFO.linkedin}`} className={styles.contact_link}>
                    <FaLinkedin size='45px' className={styles.contact_icon_linkedin} />
                </a>
                <a href={`mailto:${PERSONAL_INFO.email}`} className={styles.contact_link}>
                    <MdOutgoingMail size='50px' className={styles.contact_icon_gmail} />
                </a>
                <a href={`tel:${PERSONAL_INFO.phone}`} className={styles.contact_link}>
                    <BsTelephone size='40px' className={styles.contact_icon_tel} />
                </a>
                <a href={`skype:${PERSONAL_INFO.skype}?chat`} className={styles.contact_link}>
                    <FaSkype size='40px' className={styles.contact_icon_skype} />
                </a>
            </div>
            <a href="CV_Eugen_Stelmashok.pdf" target='_blank' download>
                <button type='button' className={styles.download_btn}>Download CV</button>
            </a>
        </div>
        <div className={styles.avatar}>
            <img src={PERSONAL_INFO.avatar} alt={PERSONAL_INFO.avatar} />
        </div>
    </div>
)
