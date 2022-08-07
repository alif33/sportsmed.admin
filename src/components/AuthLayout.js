import Navbar from './Navbar';
import Footer from './Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Toaster } from 'react-hot-toast';

export default function Layout({ children }) {
  return (
    <>  
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
        <div className="d-flex bg-black justify-content-center align-items-center">
            <Link href='/'>
                <a> <Image src="/images/UltimateLogo.png" alt="" height='95' width="100" /></a>
            </Link>
        </div>
        <main>{children}</main>
    </>
  );
}
