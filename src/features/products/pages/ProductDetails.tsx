import { useQuery } from "@tanstack/react-query";
import { findProduct } from "../api.ts";
import { useParams } from "react-router";

const ProductDetails = () => {
    const { id } = useParams();

    const { data, isLoading, isError } = useQuery({
        queryKey: ['products', id],
        queryFn: () => findProduct(Number(id)),
        enabled: !!id,
    });

    if (isLoading) return <p className="text-center text-lg mt-10">Loading...</p>;
    if (isError) return <p className="text-center text-red-600 mt-10">Error loading product.</p>;

    return (
        <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-xl rounded-xl">
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                    <img
                        src={data.image}
                        alt={data.name}
                        className="w-full h-auto rounded-lg "
                    />
                </div>

                <div>
                    <h1 className="text-3xl font-bold mb-4 text-gray-800">{data.name}</h1>
                    <p className="text-gray-600 mb-4">{data.description}</p>
                    <p className="text-2xl font-semibold text-green-600 mb-6">${data.price}</p>
                    <p className="text-gray-500 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, debitis, dolor error eveniet ex
                        id inventore ipsam molestias nam quod rerum saepe suscipit tempore veniam voluptas.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
