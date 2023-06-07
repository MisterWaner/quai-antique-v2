import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../../assets/images/logo-quai-antique.png";
import Burger from "../../assets/icons/burger-solid.svg";

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    };

    const toggleItem = () => {
        setToggleMenu(!toggleMenu);
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

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/connexion");
    };

    return (
        <nav className="fixed top-0 z-[4] w-full h-[100px]">
            {(toggleMenu || screenWidth > 768) && (
                <ul className="flex items-center justify-around z-[3] list-none backdrop-blur-sm border border-b-black ">
                    <li
                        onClick={toggleItem}
                        className="font-pynion text-2xl font-bold"
                    >
                        <Link
                            to="/"
                            className="no-underline text-white text-shadow "
                        >
                            <img
                                className="w-24"
                                src={Logo}
                                alt="logo-quai-antique"
                            />
                        </Link>
                    </li>
                    <li
                        onClick={toggleItem}
                        className="font-pynion text-3xl font-bold"
                    >
                        <Link className="no-underline text-white text-shadow hover:underline hover:decoration-2 hover:underline-offset-4">
                            La carte
                        </Link>
                    </li>
                    <li
                        onClick={toggleItem}
                        className="font-pynion text-3xl font-bold"
                    >
                        <Link className="no-underline text-white text-shadow hover:underline hover:decoration-2 hover:underline-offset-4">
                            Les menus
                        </Link>
                    </li>
                    <li
                        onClick={toggleItem}
                        className="font-pynion text-3xl font-bold"
                    >
                        <Link className="no-underline text-white text-shadow hover:underline hover:decoration-2 hover:underline-offset-4">
                            L&apos;équipe
                        </Link>
                    </li>
                    <li
                        onClick={toggleItem}
                        className="font-pynion text-3xl font-bold"
                    >
                        <Link className="no-underline text-white text-shadow hover:underline hover:decoration-2 hover:underline-offset-4">
                            À propos
                        </Link>
                    </li>
                    <li
                        onClick={toggleItem}
                        className="font-pynion text-3xl font-bold"
                    >
                        <Link className="no-underline text-white text-shadow hover:underline hover:decoration-2 hover:underline-offset-4">
                            Contact
                        </Link>
                    </li>
                    <li
                        onClick={toggleItem}
                        className="text-xl font-bold"
                    >
                        <button onClick={handleClick} className="h-fit border border-black rounded-md mr-[35px] px-2 py-2.5 hover:bg-bwn-color">
                            Réservez/Connexion
                        </button>
                    </li>
                </ul>
            )}

            <button onClick={toggleNav} className="icone-toggle bg-transparent rounded-md p-2 ring-1 ring-black ring-opacity-20 md:hidden">
                <img className="h-6 w-6" src={Burger} alt="burger icon" />
            </button>
        </nav>
    );
}
