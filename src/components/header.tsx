import styles from '@/app/styles.module.scss'
import HeaderLogo from './header-logo'
export default function Header(){
    return(
        <div className={styles.header}>
            <HeaderLogo/>
            This is the header
        </div>
    )
}