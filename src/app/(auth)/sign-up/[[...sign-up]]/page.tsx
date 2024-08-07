import Image from "next/image";
import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import styles from '@/app/styles.module.scss'
import ClipLoader from "react-spinners/ClipLoader";
import variables from '@/app/variables.module.scss'; // Import the variables


export default function Page() {
    return (
        <div className={styles.main}>
            <div className={styles.column}>
                <ClerkLoaded><SignUp /></ClerkLoaded>          
                <ClerkLoading>        
                    <ClipLoader color={variables.blue600} size={50} />
                </ClerkLoading>
            </div>
            <div className={styles.column}>
                <Image src='./logo.svg' alt='logo' width={200} height={200}/>
            </div>
        </div>
      );
}