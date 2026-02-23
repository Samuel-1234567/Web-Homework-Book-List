import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-full w-full p-8 flex flex-col overflow-hidden">
      <div className="mx-auto bg-white rounded-lg shadow-md p-6 flex-grow w-full flex flex-col">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
