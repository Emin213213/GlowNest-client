export type Product = {
    id: number,
    name: string,
    price: number,
    image: string,
    description: string
    createAt:string
}

export type PaginationProduct = {
    products: Product[]
    total: number
    page: number
    totalPages: number
}


export type AddCardParams = {
    userId: number;
    productId: number;
    quantity: number;
};

