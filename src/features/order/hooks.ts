import {useMutation, useQuery} from "@tanstack/react-query";
import type {Order} from "@/features/order/type.ts";
import {createOrder, getOrders} from "@/features/order/api.ts";
import {queryClient} from "@/main.tsx";

export const useOrders = () => {
    return useQuery<Order[]>({
        queryKey:['order'],
        queryFn: getOrders
    })
}

export  const useCreateOrder = () => {
    return useMutation({
        mutationFn: createOrder,
        onSuccess: () =>  {
            queryClient.invalidateQueries({queryKey:['order']})
            queryClient.invalidateQueries({queryKey:['basket']})

        },
        onError: () => {
            console.error('Error in creating product')
        }
     })
}
