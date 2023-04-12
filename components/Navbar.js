import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Link href='/'>
                    <Image width={128} height={77} src="/logo.png" alt="Logo" />
                </Link>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Ninja Listing</Link>            
        </nav>        
     );
}
 
export default Navbar;
