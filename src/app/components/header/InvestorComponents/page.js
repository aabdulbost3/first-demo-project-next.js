import styles from "./page.module.css"
import Image from "next/image"
import Companies from "../assets/Companies.png"
export default function ClientComponents() {
    return(
        <div className={styles.container}>
            <div className={styles.ClientComponents}>
            <div className={styles.text}>
                <p>Popular teams who use Omega for appoinments </p>
            </div>
            <div>
                <Image src={Companies}/>
            </div>
        </div></div>
    )
}