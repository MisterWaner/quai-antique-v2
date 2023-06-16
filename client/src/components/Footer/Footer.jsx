import Facebook from "../../assets/icons/facebook-f.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Euro from "../../assets/icons/euro-sign-solid.svg";
import Credit from "../../assets/icons/credit-card-regular.svg";
import Visa from "../../assets/icons/cc-visa.svg";

export default function Footer() {
    return (
        <footer className="mt-auto h-[250px] flex flex-col items-center bg-bwn-color border border-t-black text-white md:h-[150px]">
            <div className="w-full h-full flex flex-col justify-around items-center md:flex-row 2xl:w-1/2  ">
                <div className="w-[150px] flex justify-around">
                    <img
                        className="w-5"
                        src={Facebook}
                        alt="logo facebook"
                    />
                    <img className="w-7" src={Instagram} alt="logo instagram" />
                </div>
                <div>
                    <p className="text-sm sm:text-lg text-shadow text-center">
                        &copy; Quai antique - 2023 - Tous droits réservés
                    </p>
                </div>
                <div className="w-[150px] flex justify-around">
                    <img className="w-5" src={Euro} alt="logo facebook" />
                    <img
                        className="w-7"
                        src={Credit}
                        alt="logo instagram"
                    />
                    <img className="w-7" src={Visa} alt="logo instagram" />
                </div>
            </div>
        </footer>
    );
}
