import * as yup from "yup";

const registerSchema = yup.object().shape({
    email: yup
        .string()
        .email("Email invalide")
        .trim()
        .required("Email obligatoire"),
    password: yup
        .string()
        .min(8, "Votre mot de passe doit contenir 8 caractères minimum")
        .trim()
        .required("Mot de passe obligatoire"),
    confirmation: yup
        .string()
        .oneOf(
            [yup.ref("password"), null],
            "Le mot de passe et la confirmation doivent être identiques"
        )
        .required("Vous devez confirmer votre mot de passe"),
    role: yup.string().notRequired(),
});

export { registerSchema };
