import { Outlet, useLocation } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import DiscoverNewBeer from "./DiscoverNewBeer";
import AccountSettings from "./AccountSettings";

function Layout() {
  const pathname = useLocation().pathname;

  return (
    <>
      <div
        className={`flex flex-col min-w-full min-h-full ${
          pathname === "/login" ? "justify-center" : "justify-between"
        } `}
      >
        <header
          className={`${
            pathname === "/login" ? "hidden" : "flex"
          }  w-full h-auto justify-between items-center px-8 my-2`}
        >
          <Header />
        </header>
        <main className="content">
          <Outlet />

          <DiscoverNewBeer />

          <AccountSettings />
        </main>
        <footer
          className={`
          ${pathname === "/login" ? "hidden" : "flex"}
           flex-col items-center justify-center w-full h-auto min-h-[70px] p-4 text-center"`}
        >
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Layout;
