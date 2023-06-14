import Axios from "../api/axios";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    infoConnexionSchema,
    infoSchema,
    prefSchema,
} from "../../../Validation/profileValidation";

export default function useAxios() {
    const params = useParams();

    const GET_USER_URL = `/users/${params.id}`;

    
}
