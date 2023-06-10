import Formula from "../Formula/Formula";

export default function Meal() {
    return (
        <div className="w-80 bg-ocre m-6 py-6 px-4 rounded-lg shadow-lg shadow-bwn-color justify-self-center">
            <div>
                <h3 className="text-center font-bold text-xl">Titre du menu</h3>
            </div>
            <div>
                <Formula />
                <Formula />
                <Formula />
            </div>
        </div>
    )
}
