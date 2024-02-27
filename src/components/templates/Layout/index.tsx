import Spinner from 'components/atoms/Spinner';
import Box from 'components/layout/Box';
import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Spinner />
      <Box $padding={'large'}>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
