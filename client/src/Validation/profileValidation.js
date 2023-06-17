import * as yup from "yup";

const infoSchema = yup.object().shape({
    firstname: yup.string().required("Le prénom est requis"),
    lastname: yup.string().required("Le nom de famille est requis"),
    phone: yup
        .string()
        .length(10, "Le numéro de téléphone doit contenir 10 chiffres")
        .trim()
        .required("Le numéro de téléphone est requis"),
});

const prefSchema = yup.object().shape({
    allergies: yup.string().notRequired().trim(),
    quantity: yup
        .number()
        .min(
            1,
            "Vous ne pouvez pas saisir un nombre de couvert inférieur à 1. Je vous rappelle que Casper ne mange pas"
        )
        .max(
            10,
            "Pour un nombre de couverts supérieur à 10 merci de nous contacter par téléphone"
        )
        .required("Le nombre de couvert est requis"),
    children: yup
        .number()
        .min(
            0,
            "Le nombre d'enfants ne peut pas être négatif... devrions-nous appeler le FBI ?"
        )
        .max(5, "On aime bien les enfants... mais trop ça fait du bruit hihi")
        .required(
            "Le nombre d'enfant est requis, surtout quand ils ont un bon appétit !"
        ),
});

const infoConnexionSchema = yup.object().shape({
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
});

export { infoSchema, prefSchema, infoConnexionSchema };
