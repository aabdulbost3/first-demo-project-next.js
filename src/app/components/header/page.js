import styles from "./page.module.css"
import HeaderComponentsHeader from "./mainComponents/page"
import ClientComponents from "./InvestorComponents/page"
import FeaturesComponents from "./FeaturesComponents/page"
export default function HeaderComponents() {
    return (
        <div className={styles.headerFather}>
            <HeaderComponentsHeader />
            <ClientComponents />
            <FeaturesComponents />
        </div>
    )
}