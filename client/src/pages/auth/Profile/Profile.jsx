import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "../../../api/axios";
import {
    infoConnexionSchema,
    infoSchema,
    prefSchema,
} from "../../../Validation/profileValidation";

export default function Profile() {


    return (
        <main className="w-full flex-1 h-full md:mt-[98px] lg:container lg:mx-auto">
            <h1 className="text-center py-4 text-[50px] font-bold">
                Mon Compte
            </h1>
        </main>
    );
}
