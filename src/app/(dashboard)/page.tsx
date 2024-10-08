import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import styles from '@/app/styles.module.scss'
import variables from './variables.module.scss'

export default function Home() {
  return (
    <div className={styles.main}>
      <p className={styles.text}>This is a authenticated route</p>
      <UserButton afterSwitchSessionUrl="/"/>
    </div>
  );
}
