export default function Card() {
    return (
        <div className="w-64 my-6 mx-4 bg-ocre pt-6 px-4 pb-2.5 justify-self-center rounded-lg shadow-lg shadow-bwn-color xl:w-80 2xl:w-96">
            <div>
                <h3 className="text-2xl font-bold">Titre de la carte</h3>
            </div>
            <div>
                <div className="w-56 py-2.5 xl:w-72 2xl:w-auto">
                    <img className="w-full rounded-md" src="/images/salade-saumon.jpg" alt="" />
                </div>
                <p className="italic pt-1.5 pb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit beatae ea reiciendis dicta? Inventore ex error perferendis asperiores maiores necessitatibus id veritatis sint obcaecati.
                </p>
            </div>
            <hr className="border border-black" />
            <div className="mt-2 5">
                <p className="py-1 5 font-bold">22.99€</p>
            </div>
        </div>
    );
}
