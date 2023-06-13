import Logo from "../../assets/images/logo-quai-antique.png";
import Burger from "../../assets/icons/burger-solid.svg";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar2() {
    const navigate = useNavigate();
    const params = useParams();

    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    };

    const toggleItem = () => {
        setToggleMenu(!toggleMenu);
    };

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/connexion");
    };

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", changeWidth);

        return () => {
            window.removeEventListener("resize", changeWidth);
        };
    }, []);
    return (
        <nav className="relative top-0 z-[4] w-full h-[100px] md:fixed">
            {(toggleMenu || screenWidth > 768) && (
                <ul className="flex flex-col items-center py-5 space-y-5 z-[3] list-none backdrop-blur-sm border border-b-black md:flex-row md:space-y-0 md:py-0 md:justify-around ">
                    <li onClick={toggleItem}>
                        <Link to="/">
                            <img
                                className="w-24"
                                src={Logo}
                                alt="logo du restaurant Quai Antique"
                            />
                        </Link>
                    </li>
                    <li
                        onClick={toggleItem}
                        className="font-pynion text-3xl md:text-2xl lg:text-3xl font-bold"
                    >
                        <Link
                            to={`/mon-compte/${params.id}`}
                            className="no-underline text-white text-shadow hover:underline hover:decoration-2 hover:underline-offset-4"
                        >
                            Mon Compte
                        </Link>
                    </li>
                    <li
                        onClick={toggleItem}
                        className="font-pynion text-3xl md:text-2xl lg:text-3xl font-bold"
                    >
                        <Link
                            to={`/mon-compte/${params.id}/reservation`}
                            className="no-underline text-white text-shadow hover:underline hover:decoration-2 hover:underline-offset-4"
                        >
                            Réservation
                        </Link>
                    </li>
                    <li onClick={toggleItem} className="text-xl font-bold">
                        <button
                            onClick={handleClick}
                            className="h-fit border border-black rounded-md px-2 py-2.5 hover:bg-bwn-color"
                        >
                            Déconnexion
                        </button>
                    </li>
                </ul>
            )}
            <button onClick={toggleNav} className="absolute top-6 right-6 border-0 icone-toggle bg-transparent rounded-md p-1 md:hidden">
                <img className="h-9 w-9" src={Burger} alt="burger icon" />
            </button>
        </nav>
    );
}
