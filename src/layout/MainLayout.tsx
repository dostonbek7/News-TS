import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <main className="max-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
