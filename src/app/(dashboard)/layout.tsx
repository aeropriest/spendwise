import styles from '@/app/styles.module.scss'
import Header from '@/components/header';
import { UserButton } from "@clerk/nextjs"
type props = {
    children: React.ReactNode;
}

export default function DashboardLayout({children}: props){
    return(
        <header className={styles.main}>
            <Header />
            {children}
        </header>
    )

}