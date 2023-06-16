import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "../../../api/axios";
import {
    infoConnexionSchema,
    infoSchema,
    prefSchema,
} from "../../../Validation/profileValidation";
import { updateUser } from "../../../functions/userRequests";

export default function Profile() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(infoSchema),
        mode: "onTouched",
    });
    const {
        register: registerPrefs,
        handleSubmit: handleSubmitPrefs,
        reset: resetPrefs,
        formState: { errors: prefErrors },
    } = useForm({
        resolver: yupResolver(prefSchema),
        mode: "onTouched",
    });
    const {
        register: registerInfoConnexion,
        handleSubmit: handleSubmitInfoConnexion,
        reset: resetInfoConnexion,
        formState: { errors: errorInfoConnexion },
    } = useForm({
        resolver: yupResolver(infoConnexionSchema),
        mode: "onTouched",
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        console.log(data);

        await updateUser(data);
        reset();
    };

    const submitPrefs = async (data, event) => {
        event.preventDefault();
        console.log(data);

        await updateUser(data);
        resetPrefs();
    };

    const submitInfoConnexion = async (data, event) => {
        event.preventDefault();
        console.log(data);

        await updateUser(data);
        resetInfoConnexion();
    };

    return (
        <main className="w-full flex-1 h-full md:mt-[98px] lg:container lg:mx-auto">
            <h1 className="text-center py-4 text-[50px] font-bold">
                Mon Compte
            </h1>
            <section className="my-6 px-6">
                <h2 className="underline underline-offset-2 text-xl font-bold">
                    Mes informations personnelles
                </h2>
                <div className="w-3/4 mt-6 mx-auto flex flex-col md:justify-around lg:w-4/5 lg:flex-row">
                    <form
                        key={1}
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full md:w-[35vw] lg:w-[25vw] mb-6"
                    >
                        <div className="flex flex-col mb-4 w-full">
                            <label className="text-lg pb-1" htmlFor="firstname">Prénom: </label>
                            <input
                                className="h-8 outline-none rounded-t-md text-base border border-b-black p-3 bg-ocre placeholder-gray-500"
                                type="text"
                                id="firstname"
                                placeholder="John"
                            />
                        </div>
                        <div className="flex flex-col mb-4 w-full">
                            <label className="text-lg pb-1" htmlFor="lastname">Nom: </label>
                            <input
                                className="h-8 outline-none rounded-t-md text-base border border-b-black p-3 bg-ocre placeholder-gray-500"
                                type="text"
                                id="lastname"
                                placeholder="Doe"
                            />
                        </div>
                        <div className="flex flex-col mb-4 w-full">
                            <label className="text-lg pb-1" htmlFor="phone">Numéro de téléphone: </label>
                            <input
                                className="h-8 outline-none rounded-t-md text-base border border-b-black p-3 bg-ocre placeholder-gray-500"
                                type="text"
                                id="phone"
                                placeholder="06-XX-XX-XX-XX"
                            />
                        </div>
                        <button className="p-2 text-lg rounded-md border border-black w-full bg-transparent font-bold hover:bg-bwn-color hover:text-white hover:text-shadow active:scale-[0.98]" type="submit">Valider</button>
                    </form>
                    <table className="w-full md:w-[35vw] lg:w-[25vw] border-2 border-black rounded-lg table-auto">
                        <tbody>
                            <tr>
                                <td className="font-bold px-3">Prénom:</td>
                                <td className="value">John</td>
                            </tr>
                            <tr>
                                <td className="font-bold px-3">Nom:</td>
                                <td className="value">Doe</td>
                            </tr>
                            <tr>
                                <td className="font-bold px-3">Téléphone:</td>
                                <td className="value">06-XX-XX-XX-XX</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className="my-6 px-6">
                <h2 className="underline underline-offset-2 text-xl font-bold">
                    Mes préférences:{" "}
                </h2>
                <div className="w-3/4 mt-6 mx-auto flex flex-col md:justify-around  lg:w-4/5 lg:flex-row">
                    <form
                        key={2}
                        onSubmit={handleSubmitPrefs(submitPrefs)}
                        className="w-full md:w-[35vw] lg:w-[25vw] mb-6"
                    >
                        <div className="flex flex-col mb-4 w-full">
                            <label className="text-lg pb-1" htmlFor="allergies">Allergies:</label>
                            <input className="h-8 outline-none rounded-t-md text-base border border-b-black p-3 bg-ocre placeholder-gray-500" type="text" id="allergies" />
                        </div>
                        <div className="flex flex-col mb-4 w-full">
                            <label className="text-lg pb-1" htmlFor="quantity">
                                Nombre de mangeurs:
                            </label>
                            <input className="h-8 outline-none rounded-t-md text-base border border-b-black p-3 bg-ocre placeholder-gray-500" type="number" id="quantity" />
                        </div>
                        <div className="flex flex-col mb-4 w-full">
                            <label className="text-lg pb-1" htmlFor="children">
                                Nombre de mini-mangeurs:
                            </label>
                            <input className="h-8 outline-none rounded-t-md text-base border border-b-black p-3 bg-ocre placeholder-gray-500" type="number" id="children" />
                        </div>
                        <button className="p-2 text-lg rounded-md border border-black w-full bg-transparent font-bold hover:bg-bwn-color hover:text-white hover:text-shadow active:scale-[0.98]" type="submit">Valider</button>
                    </form>
                    <table className="w-full md:w-[35vw] lg:w-[25vw] border-2 border-black rounded-lg table-auto">
                        <tbody>
                            <tr>
                                <td className="font-bold px-3">Allergies:</td>
                                <td className="value">Noix</td>
                            </tr>
                            <tr>
                                <td className="font-bold px-3">Nombre de couverts:</td>
                                <td className="value">1</td>
                            </tr>
                            <tr>
                                <td className="font-bold px-3">
                                    Nombre d&apos;enfants:
                                </td>
                                <td className="value">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className="my-6 px-6">
                <h2 className="underline underline-offset-2 text-xl font-bold">
                    Mes informations de connexion:{" "}
                </h2>
                <div className="w-3/4 mt-6 mx-auto flex flex-col lg:w-4/5 lg:flex-row lg:justify-start">
                    <form
                        key={3}
                        onSubmit={handleSubmitInfoConnexion(
                            submitInfoConnexion
                        )}
                        className="w-full md:w-[35vw] lg:w-[25vw] mb-6"
                    >
                        <div className="flex flex-col mb-4 w-full">
                            <label className="text-lg pb-1" htmlFor="email">Email:</label>
                            <input className="h-8 outline-none rounded-t-md text-base border border-b-black p-3 bg-ocre placeholder-gray-500" type="email" id="email" />
                        </div>
                        <div className="flex flex-col mb-4 w-full">
                            <label className="text-lg pb-1" htmlFor="password">Mot de passe:</label>
                            <input className="h-8 outline-none rounded-t-md text-base border border-b-black p-3 bg-ocre placeholder-gray-500" type="password" id="password" />
                        </div>
                        <div className="flex flex-col mb-4 w-full">
                            <label className="text-lg pb-1" htmlFor="confirmation">
                                Confirmation du mot de passe:
                            </label>
                            <input className="h-8 outline-none rounded-t-md text-base border border-b-black p-3 bg-ocre placeholder-gray-500" type="password" id="confirmation" />
                        </div>
                        <button className="p-2 text-lg rounded-md border border-black w-full bg-transparent font-bold hover:bg-bwn-color hover:text-white hover:text-shadow active:scale-[0.98]" type="submit">Modifier</button>
                    </form>
                </div>
            </section>
        </main>
    );
}
