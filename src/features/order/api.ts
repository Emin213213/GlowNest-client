import axiosInstance from "@/services/axios.ts";


export const  getOrders = async () => {
    const response = await  axiosInstance.get('/order')
    return response.data
}

export  const  createOrder = async () => {
    const repsonse = await  axiosInstance.post('/order')
    return repsonse.data.order
}