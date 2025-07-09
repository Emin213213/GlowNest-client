import axiosInstance from "../../services/axios.ts";
import type { PaginationProduct} from "@/features/products/type.ts";

// -----  Products -----
export const topProduct = async () => {
    const response = await axiosInstance.get('/product');
    return response.data.slice(0,4)
};

export  const  findProduct = async (id:number) => {
    const response = await axiosInstance.get(`/product/${id}`)
    return response.data
}

export const fetchProductPagination = async (pageParam: number): Promise<PaginationProduct> => {
    const limit = 6;
    const response = await axiosInstance.get(`/product?page=${pageParam}&limit=${limit}`);
    return {
        products: response.data,
        page: pageParam,
        totalPages: 5,
        total: 50
    };
};



//  ----- Basket -----

export  const cardItem  = async () => {
    const response = await  axiosInstance.get(`/card`)
    return response.data
}

export const addCArd = async ({productId, quantity }: {productId: number, quantity: number}) => {
    const response = await axiosInstance.post(`/card`, {
        productId,
        quantity,
    });

    return response.data;
};



export  const updateCArd = async () => {
    const response = await  axiosInstance.put('/card')
    return response.data

}

export const removeCart = async (id: number) => (
    await axiosInstance.delete(`/card/${id}`)).status
