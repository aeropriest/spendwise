import { UserButton } from "@clerk/nextjs";
import styles from '@/app/styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import HeaderLogo from './header-logo'
export default function Header(){
    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>
                    <Image src='./logo.svg' alt='logo' width={125} height={40}/>
                </Link>        
            </div>
            <div className={styles.menu}>
                <Link href='/overview'>Overview</Link>
                <Link href='/transactions'>Transactions</Link>
                <Link href='/accounts'>Accounts</Link>
                <Link href='/categories'>Categories</Link>
                <Link href='/settings'>Settings</Link>
            </div>
            <div className={styles.signout}>
                <UserButton afterSwitchSessionUrl="/"/>    
            </div>
        </div>
    )
}