import Facebook from "../../assets/icons/facebook-f.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Euro from "../../assets/icons/euro-sign-solid.svg";
import Credit from "../../assets/icons/credit-card-regular.svg";
import Visa from "../../assets/icons/cc-visa.svg";

export default function Footer() {
    return (
        <footer className="mt-auto h-[150px] flex justify-center items-center bg-bwn-color border border-t-black text-white text-6xl">
            <div className="w-1/2 flex justify-around items-center h-full">
                <div className="w-[150px] flex">
                    <img
                        className="w-5 mr-7"
                        src={Facebook}
                        alt="logo facebook"
                    />
                    <img className="w-7" src={Instagram} alt="logo instagram" />
                </div>
                <div>
                    <p className="text-xl text-shadow">
                        &copy; Quai antique - 2023 - Tous droits réservés
                    </p>
                </div>
                <div className="w-[150px] flex">
                    <img className="w-5 mr-7" src={Euro} alt="logo facebook" />
                    <img
                        className="w-7 mr-7"
                        src={Credit}
                        alt="logo instagram"
                    />
                    <img className="w-7" src={Visa} alt="logo instagram" />
                </div>
            </div>
        </footer>
    );
}
