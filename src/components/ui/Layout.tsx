import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Suspense } from "react";
import Loading from "./Loading";
import { LoadingSize } from "../../types/enums";

function Layout() {
  return (
    <>
      <Header />
      <main className="grow relative min-h-full">
        <Suspense fallback={<Loading size={LoadingSize.L} />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
