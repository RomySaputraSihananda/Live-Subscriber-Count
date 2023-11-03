import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, style }) => {
  return (
    <div className={style}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
