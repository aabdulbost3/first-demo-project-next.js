import styles from "./page.module.css"
import Image from "next/image"
import oval from "../assets/oval.png"
import icon1 from "../assets/icon.png"

export default function FeaturesComponents() {
    return(
        <>
        <div className={styles.FeaturesComponents}>
            <div className={styles.blueFon}>
                <div className={styles.images}>
                    <Image src={oval}/>
                </div>
                <div className={styles.SecondContentFather}>
                    <div className={styles.SecondContentleft}>
                        <div className={styles.card}>

                            <div className={styles.cardimage}>
                                <Image src={icon1}/>
                            </div>
                            <div className={styles.cardText}>
                                <h2>Multiple Layouts</h2>
                                <br />
                                <p>
                                    With lots of unique blocks, you can easily build a page without coding.
                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            
                            <div className={styles.cardimage}>
                                <Image src={icon1}/>
                            </div>
                            <div className={styles.cardText}>
                                <h2>Multiple Layouts</h2>
                                <br />
                                <p>
                                    With lots of unique blocks, you can easily build a page without coding.
                                </p>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}