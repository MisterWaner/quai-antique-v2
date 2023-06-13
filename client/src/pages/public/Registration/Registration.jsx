import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../../Validation/registerValidation";
import Axios from "../../../api/axios";

const REGISTRATION_URL = "/auth/register";

export default function Registration() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
        mode: "onTouched",
    });

    const navigate = useNavigate();
    const onSubmit = async (data, event) => {
        event.preventDefault();
        console.log(data);

        try {
            const res = await Axios.post(REGISTRATION_URL, data);
            if (res.status === 200) {
                alert("Inscription effectuée avec succès");
                reset();
            } else if (res.status === 401) {
                alert("Oops il y a eut un problème");
            }
            navigate("/connexion");
            console.log(res);
        } catch (error) {
            console.log(error);
            if (!error?.res) {
                alert("Aucune réponse du serveur");
            } else if (error.res?.status === 409) {
                alert("Cet email est déjà enregistré");
            } else {
                alert("L'inscription a échouée");
            }
        }
    };

    return (
        <main className="w-full flex-1 h-full md:mt-[98px] lg:container lg:mx-auto">
            <h1 className="text-center py-4 text-[50px] font-bold">
                Inscription
            </h1>
            <section className="w-1/2 mx-auto h-full mt-6 mb-12 lg:w-[500px]">
                <form
                    className="w-full h-full flex flex-col items-center space-y-2"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex flex-col mb-4 w-full">
                        <label className="text-lg pb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="h-8 outline-none rounded-t-md text-lg border border-b-black p-2 bg-ocre placeholder-gray-500"
                            type="email"
                            id="email"
                            autoComplete="off"
                            placeholder="johndoe@example.com"
                            {...register("email")}
                        />
                        {errors.email ? (
                            <p className="error-msg text-center">
                                {errors.email?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label className="text-lg pb-1" htmlFor="password">
                            Mot de passe
                        </label>
                        <input
                            className="h-8 outline-none rounded-t-md text-lg border border-b-black p-2 bg-ocre placeholder-gray-500"
                            type="password"
                            id="password"
                            autoComplete="off"
                            placeholder="Mot de passe"
                            {...register("password")}
                        />
                        {errors.password ? (
                            <p className="error-msg text-center">
                                {errors.password?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label className="text-lg pb-1" htmlFor="password">
                            Confirmation
                        </label>
                        <input
                            className="h-8 outline-none rounded-t-md text-lg border border-b-black p-2 bg-ocre placeholder-gray-500"
                            type="password"
                            id="password"
                            autoComplete="off"
                            placeholder="Mot de passe"
                            {...register("confirmation", {
                                validate: (val) => {
                                    if (watch("password") != val) {
                                        return "Le mot de passe et la confirmation ne sont pas identiques";
                                    }
                                },
                            })}
                        />
                        {errors.confirmation ? (
                            <p className="error-msg text-center">
                                {errors.confirmation?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <button
                        className="p-2 text-lg rounded-md border border-black w-full bg-transparent font-bold hover:bg-bwn-color hover:text-white hover:text-shadow active:scale-[0.98]"
                        type="submit"
                    >
                        Je m&apos;inscris
                    </button>
                </form>
            </section>
        </main>
    );
}
