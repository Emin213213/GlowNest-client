import { useQuery} from "@tanstack/react-query";
import { topProduct} from "@/features/products/api.ts";

const TopProduct = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['top-product'],
        queryFn: topProduct,
    });



    if (isLoading) return <p>Loading...</p>;
    if (isError || !data) return <p>Error loading top products</p>;

    return (
        <div id='top'>
            <div className="text-center mt-20  mb-14">
                <h2 className="text-4xl font-bold text-gray-900">Top sales this season</h2>
                <p className="text-gray-600 mt-2">
                    Discover the most popular fragrances that bring inspiration, harmony and comfort.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {data.map((item) => (
                    <div key={item.id} className="border border-pink-200 rounded-xl p-4 shadow hover:shadow-md text-center">
                        <img src={item.image} alt={item.name} className="h-60 object-contain mx-auto mb-4" />
                        <h3 className="font-medium mb-1">{item.name}</h3>
                        <p className="text-pink-600 font-semibold mb-2">{item.price}$</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export  default  TopProduct