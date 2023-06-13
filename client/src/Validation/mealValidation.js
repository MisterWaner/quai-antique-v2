import * as yup from "yup";

const mealSchema = yup.object().shape({
    title: yup.string().required("Le nom du menu est requis"),
});

export { mealSchema };