import Axios from "../api/axios";

async function updateUser(data) {

    const GET_USER_URL = "/users/id";
    
    try {
        const res = await Axios.put(GET_USER_URL, data);
        console.log(res.data[0]);

        if (res.status === 200) {
            alert("Votre formulaire a bien été pris en compte");
        } else if (res.status === 401) {
            alert("Oups un problème est survenu");
        }
    } catch (error) {
        console.log(error);
        if (!error?.res) {
            alert("Aucune réponse du serveur");
        } else {
            alert("La mise à jour du profil a échouée");
        }
    }
}

export { updateUser };
