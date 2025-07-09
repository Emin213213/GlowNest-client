import axiosInstance from "../../services/axios.ts";
import {setUserId} from "@/redux/userSlice.ts";
import {store} from "@/redux/store.ts";

export const register = async (data: { name: string, email: string, password: string }) => {
    const response = await axiosInstance.post('/user/register', data)
    return response.data

}

export const fetchUser = async () => {
    const response = await axiosInstance.get('/user/profile');
    return response.data;
};


export const login = async (data: { email: string; password: string }) => {
    await axiosInstance.post('/user/login', data);

    const user = await fetchUser();

    if (user?.id) {
        store.dispatch(setUserId(user.id))
        localStorage.setItem('userId', String(user.id))
    }


    return user;
};




