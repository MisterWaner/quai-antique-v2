import Meal from "../../../components/Meal/Meal";

export default function Menus() {
    return (
        <main className="w-full flex-1 h-full md:mt-[98px] lg:container lg:mx-auto">
            <h1 className="text-center py-4 text-[50px] font-bold">Les Menus</h1>
            <div className="flex flex-wrap justify-center my-6 mx-12">
                <Meal />
                <Meal />
                <Meal />
            </div>
        </main>
    );
}
