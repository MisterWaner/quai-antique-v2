import Phone from "../../../assets/icons/phone-solid.svg";
import At from "../../../assets/icons/at-solid.svg";
import Location from "../../../assets/icons/location-dot-solid.svg";

export default function Contact() {
    return (
        <main className="w-full flex-1 h-full md:mt-[98px] lg:container lg:mx-auto">
            <h1 className="text-center py-4 text-[50px] font-bold">Contact</h1>
            <section className="p-5 lg:px-0 flex flex-col items-center md:flex-row md:justify-between">
                <div className=" flex items-center my-4">
                    <img className="w-6 mr-6" src={Phone} alt="" />
                    <p>04-56-01-02-03</p>
                </div>
                <div className=" flex items-center my-4">
                    <img className="w-6 mr-6" src={Location} alt="" />
                    <address>
                        <p>Quai Antique</p>
                        <p>Rue Vieille Monnaie</p>
                        <p>73000 Chambéry</p>
                    </address>
                </div>
                <div className=" flex items-center my-4">
                    <img className="w-6 mr-6" src={At} alt="" />
                    <p>contact@quai-antique.fr</p>
                </div>
            </section>
            <section className="p-5 lg:px-0 flex flex-wrap justify-around md:justify-between">
                    <img className="mb-6 w-[250px] rounded-lg shadow-lg shadow-bwn-color lg:w-[300px] xl:w-[400px]" src="/images/place-des-elephants.jpg" alt="fontaine des éléphants" />
                    <img className="mb-6 w-[250px] rounded-lg shadow-lg shadow-bwn-color lg:w-[300px] xl:w-[400px]" src="/images/drapeaux-savoie.jpg" alt="drapeau de la Savoie" />
                    <img className="mb-6 w-[250px] rounded-lg shadow-lg shadow-bwn-color lg:w-[300px] xl:w-[400px]" src="/images/fondue.jpg" alt="fondue savoyarde" />
                </section>
        </main>
    );
}
