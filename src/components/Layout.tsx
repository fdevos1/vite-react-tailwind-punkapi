import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <>
      <div className="flex flex-col min-w-full min-h-full">
        <Header />

        <div className="content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
