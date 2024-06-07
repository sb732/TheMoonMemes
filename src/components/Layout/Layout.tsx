import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface LayoutProps {
  showNav: boolean;
  setShowNav: (showNav: boolean) => void;
}

const Layout = ({ showNav, setShowNav }: LayoutProps) => {
  return (
    <>
      <Header showNav={showNav} setShowNav={setShowNav} />
      <div className="mt-[96px] lg:mt-[148px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
