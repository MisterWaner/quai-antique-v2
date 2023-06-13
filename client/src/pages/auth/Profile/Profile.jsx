import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver} from '@hookform/resolvers/yup';

const BASE_URL = 'http://localhost:3001';

export default function Profile() {

    const params = useParams();

    const onSubmit = async (data, event) => {
        event.preventDefault();
        console.log(data);

        try {
            const res = await fetch(`${BASE_URL}/users/${params.id}`,{
                method: "POST",
                
            })
        } catch (error) {
            
        }
    }

    return (
        <main className="w-full flex-1 h-full md:mt-[98px] lg:container lg:mx-auto">
            <h1 className="text-center py-4 text-[50px] font-bold">
                Mon Compte
            </h1>
        </main>
    );
}
