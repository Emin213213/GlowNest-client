import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../api.ts";

const Profile = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['userProfile'],
        queryFn: fetchUser
    });

    if (isLoading) return <p className="text-center mt-10 text-gray-500">Загрузка...</p>;
    if (error) return <p className="text-center mt-10 text-red-500">Ошибка загрузки</p>;

    console.log(data.id)
    return (
        <div >
            <div className="flex flex-col justify-center ">

             <div className='flex justify-center text-center items-center gap-3'>


                <img
                    src={`https://ui-avatars.com/api/?name=${data.name}&background=random`}
                    alt="avatar"
                    className="w-24 h-24 rounded-full shadow-md mt-6"
                />
                <ul className="space-y-1 text-gray-700">
                    <li> Name: {data.name}</li>
                    <li>Email:{data.email}</li>
                </ul>
            </div>



            </div>
        </div>
    );
};

export default Profile;
