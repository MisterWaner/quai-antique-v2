import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { connectionSchema } from "../../../Validation/connectionValidation";
import Axios from "../../../api/axios";

const LOGIN_URL = "auth/login";

export default function Connection() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(connectionSchema),
        mode: "onTouched",
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        console.log(data);

        try {
            const res = await Axios.post(LOGIN_URL, data);
            console.log(res);

            const role = res?.data?.user.role;
            const token = res?.data?.token;
            const id = res?.data?.user.id;
            console.log(role);
            console.log(token);

            if (role === "1" && token) {
                navigate("/dashboard");
            } else if (role === "2" && id && token) {
                navigate(`/mon-compte/${id}`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className="w-full flex-1 h-full md:mt-[98px] lg:container lg:mx-auto">
            <h1 className="text-center py-4 text-[50px] font-bold">
                Connexion
            </h1>
            <section className="w-1/2 mx-auto h-full mt-6 mb-12 lg:w-[500px]">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full h-full flex flex-col items-center space-y-2"
                >
                    <div className="flex flex-col mb-4 w-full">
                        <label className="text-lg pb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="h-8 outline-none rounded-t-md text-base border border-b-black p-3 bg-ocre placeholder-gray-500"
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="off"
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
                            className="h-8 outline-none rounded-t-md text-base border border-b-black p-3 bg-ocre placeholder-gray-500"
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="off"
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
                    <button
                        className="p-2 text-lg rounded-md border border-black w-full bg-transparent font-bold hover:bg-bwn-color hover:text-white hover:text-shadow active:scale-[0.98]"
                        type="submit"
                    >
                        Je me connecte
                    </button>
                </form>
                <p className="text-center text-sm mt-2">
                    Vous n&apos;avez pas de compte ?{" "}
                    <Link
                        className="no-underline text-bwn-color font-bold hover:underline"
                        to="/inscription"
                    >
                        Inscrivez-vous
                    </Link>{" "}
                    pour enregistrer vos préférences.
                </p>
            </section>
        </main>
    );
}
