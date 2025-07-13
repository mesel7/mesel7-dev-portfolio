import { Outlet } from "react-router-dom";
import "./Layout.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = () => {
    return (
        <div className="layout-wrapper">
            <Header />
            <main className="layout-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;