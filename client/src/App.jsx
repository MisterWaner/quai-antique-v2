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

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<PublicLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/carte" element={<Carte />} />
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
