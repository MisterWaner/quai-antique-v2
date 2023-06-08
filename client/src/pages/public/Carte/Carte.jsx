import Card from "../../../components/Card/Card";

export default function Carte() {
    return (
        <main className="w-full flex-1 h-full md:mt-[98px] lg:container lg:mx-auto">
            <h1 className="text-center py-4 text-[50px] font-bold">La Carte</h1>
            <section className="my-5 mx-7">
                <h2 className="text-2xl font-bold underline">Les Entrées</h2>
                <div className="flex flex-wrap justify-center">
                    <Card />
                    <Card />
                </div>
            </section>
            <section className="my-5 mx-7">
                <h2 className="text-2xl font-bold underline">Les Plats</h2>
                <div className="flex flex-wrap justify-center">
                    <Card />
                    <Card />
                </div>
            </section>
            <section className="my-5 mx-7">
                <h2 className="text-2xl font-bold underline">Les Desserts</h2>
                <div className="flex flex-wrap justify-center">
                    <Card />
                    <Card />
                </div>
            </section>
        </main>
    );
}
