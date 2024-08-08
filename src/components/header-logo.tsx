import Link from "next/link";
import Image
 from "next/image";
export default function HeaderLogo(){
    return(
        <div>
            <Link href='/'>
                <Image src='./logo.svg' alt='logo' width={200} height={200}/>
            </Link>
        </div>
    )
}