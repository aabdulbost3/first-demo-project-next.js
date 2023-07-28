import styles from './page.module.css'
import HeaderComponents from './components/header/page'


export default function Home() {
  return (
    <>
      <div className={styles.container}>
          <HeaderComponents />
      </div>
    </>
  )
}
