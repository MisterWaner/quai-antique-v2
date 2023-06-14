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
    }

    const submitPrefs = async (data, event) => {
        event.preventDefault();
        console.log(data);

        await updateUser(data);
        resetPrefs()
    }

    const submitInfoConnexion = async (data, event) => {
        event.preventDefault();
        console.log(data);

        await updateUser(data);
        resetInfoConnexion();
    }

    return (
        <main className="w-full flex-1 h-full md:mt-[98px] lg:container lg:mx-auto">
            <h1 className="text-center py-4 text-[50px] font-bold">
                Mon Compte
            </h1>
            <section className="my-6 px-6">
                <h2 className="underline underline-offset-2 text-xl font-bold">Mes informations personnelles</h2>
                <div>
                    <form key={1} onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="firstname">Prénom: </label>
                            <input type="text" id="firstname" placeholder="John" />
                        </div>
                        <div>
                            <label htmlFor="lastname">Nom: </label>
                            <input type="text" id="lastname" placeholder="Doe" />
                        </div>
                        <div>
                            <label htmlFor="phone">Numéro de téléphone: </label>
                            <input type="text" id="phone" placeholder="06-XX-XX-XX-XX" />
                        </div>
                        <button type="submit">Valider</button>
                    </form>
                    <table>
                        <tbody>
                            <tr>
                                <td className="label">Prénom:</td>
                                <td className="value">John</td>
                            </tr>
                            <tr>
                                <td className="label">Nom:</td>
                                <td className="value">Doe</td>
                            </tr>
                            <tr>
                                <td className="label">Téléphone:</td>
                                <td className="value">06-XX-XX-XX-XX</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className="my-6 px-6">
                <h2 className="underline underline-offset-2 text-xl font-bold">Mes préférences: </h2>
                <div>
                    <form key={2}>
                        <div>
                            <label htmlFor="allergies">Allergies:</label>
                            <input type="text" id="allergies" />
                        </div>
                        <div>
                            <label htmlFor="quantity">Nombre de mangeurs:</label>
                            <input type="number" id="quantity" />
                        </div>
                        <div>
                            <label htmlFor="children">Nombre de mini-mangeurs:</label>
                            <input type="number" id="children" />
                        </div>
                        <button type="submit">Valider</button>
                    </form>
                    <table>
                        <tbody>
                            <tr>
                                <td className="label">Allergies:</td>
                                <td className="value">Noix</td>
                            </tr>
                            <tr>
                                <td className="label">Nombre de couverts:</td>
                                <td className="value">1</td>
                            </tr>
                            <tr>
                                <td className="label">
                                    Nombre d&apos;enfants:
                                </td>
                                <td className="value">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className="my-6 px-6">
                <h2 className="underline underline-offset-2 text-xl font-bold">Mes informations de connexion: </h2>
                <div>
                    <form key={3}>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" />
                        </div>
                        <div>
                            <label htmlFor="password">Mot de passe:</label>
                            <input type="password" id="password" />
                        </div>
                        <div>
                            <label htmlFor="confirmation">Confirmation du mot de passe:</label>
                            <input type="password" id="confirmation" />
                        </div>
                        <button type="submit">Modifier</button>
                    </form>
                </div>
            </section>
        </main>
    );
}
