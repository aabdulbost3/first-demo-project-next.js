"use client"
import styles from './page.module.css'
import Link from 'next/link'
import PlayImg from "../../../assets/button-play.png"
import HeaderinforightImg from "../../../assets/Right-Img.png"
import Image from 'next/image'
export default function HeaderComponentsHeader() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.headerInfoAll}>
                        <div className={styles.headerinfoleft}>
                            <div className={styles.headerinfolefttext}>
                                <div className={styles.headerinfotexth1}>
                                    <h1>Redesigned, <br />
                                        how you build landing page!
                                    </h1>
                                </div>
                                <div className={styles.headerinfotextp}>
                                    <p>Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</p>
                                </div>
                                <div className={styles.headerbutton}>
                                    <Link href=""><button className="red_btn">Get Started</button></Link>
                                </div>
                                <div className={styles.headerinfoicon}>
                                    <span>
                                        <a href="https://www.youtube.com">
                                            <p className='aa'> <Image src={PlayImg} alt="" />
                                                <span>Watch the intro video</span>
                                            </p>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.headerinforight}>
                            <div className={styles.headerinforightImg}>
                                <Image src={HeaderinforightImg} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}