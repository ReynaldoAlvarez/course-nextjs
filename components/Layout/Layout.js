import Nav from '../Nav/Nav'
import Header from '../Header/Header'
import styles from '../../styles/Layout.module.css'
// {children watch content page here}
function Layout({children}) {
    return (
        <>
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
                <Header />
                {children}
            </main>
        </div>
        </>
        
    )
}

export default Layout
