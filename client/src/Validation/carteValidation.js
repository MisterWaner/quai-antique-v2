import * as yup from "yup";

const carteCreationSchema = yup.object().shape({
    title: yup
        .string()
        .required("Titre obligatoire")
        .max(100, "Attention le titre ne doit pas dépasser 100 caractères"),
    description: yup.string().required("Description obligatoire"),
    price: yup
        .number()
        .positive()
        .test("is-decimal", "valid decimal", (value) =>
            (value + "").match(/^\d*\.{1}\d*$/)
        )
        .required("Le prix est obligatoire"),
    picture: yup.mixed().required("L'image est obligatoire"),
});

export { carteCreationSchema };
