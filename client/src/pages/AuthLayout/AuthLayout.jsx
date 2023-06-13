import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar2 from "../../components/Navbar2/Navbar2";

export default function AuthLayout() {

    return (
        <>
            <Navbar2 />
            <Outlet />
            <Footer />
        </>
    );
}
