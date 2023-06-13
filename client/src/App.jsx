import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import "./App.css";
import PublicLayout from "./pages/PublicLayout/PublicLayout";
import Home from "./pages/public/Home/Home";
import Carte from "./pages/public/Carte/Carte";
import Menus from "./pages/public/Menus/Menus";
import Equipe from "./pages/public/Equipe/Equipe";
import About from "./pages/public/About/About";
import Contact from "./pages/public/Contact/Contact";
import AuthLayout from "./pages/AuthLayout/AuthLayout";
import Profile from "./pages/auth/Profile/Profile";
import Registration from "./pages/public/Registration/Registration";

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<PublicLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/carte" element={<Carte />} />
                    <Route path="/menus" element={<Menus />} />
                    <Route path="/equipe" element={<Equipe />} />
                    <Route path="/a-propos" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/inscription" element={<Registration />} />
                </Route>
                <Route path="/mon-compte/:id" element={<AuthLayout />}>
                    <Route index element={<Profile />} />
                </Route>
            </>
        )
    )

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
