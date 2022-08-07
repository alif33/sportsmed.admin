import TopHeading from './headers/TopHeading';
import Navbar from './headers/Navbar';
import SMDFooter from './SMDFooter';
import { Toaster } from 'react-hot-toast';
import NavHeader from './headers/NavHeader';

export default function Layout({ children, navheader }) {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <TopHeading />
      <Navbar />
        {
          navheader && <NavHeader />
        }
        <main>{children}</main>
      <SMDFooter />
    </>
  );
}
