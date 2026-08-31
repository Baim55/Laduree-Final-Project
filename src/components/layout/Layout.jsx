import { Outlet } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

function Layout() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
