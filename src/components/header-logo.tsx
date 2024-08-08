import Link from "next/link";
import Image
 from "next/image";
export default function HeaderLogo(){
    return(
        <div>
            <Link href='/'>
                <div>Logo</div>
            </Link>
        </div>
    )
}