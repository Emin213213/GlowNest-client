import type {Product} from "@/features/products/type.ts";


export  interface  OrderItem {
    id : number
    quantity: number
    price: number
    product: Product

}

export interface Order{
id: number
total: number
    createAt: string
    item: OrderItem[]


}