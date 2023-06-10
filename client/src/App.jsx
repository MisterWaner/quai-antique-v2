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
