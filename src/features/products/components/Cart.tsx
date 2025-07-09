import { useQuery } from "@tanstack/react-query";
import { cardItem, removeCart } from "@/features/products/api.ts";
import { queryClient } from "@/main.tsx";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import Order from "@/features/order/components/Order.tsx";

const Cart = () => {

    const navigate = useNavigate()



    const { data, isLoading, isError } = useQuery({
        queryKey: ["card"],
        queryFn: cardItem,
    });



    const handleDeleteItem = async (itemId: number) => {
        try {
            const status = await removeCart(itemId);
            if (status === 200) {
                queryClient.invalidateQueries({ queryKey: ["card"] });
            }
        } catch (error) {
            console.error("Ошибка при удалении товара:", error);
        }
    };

    const click = (producted: number) => {
        navigate(`/product/${producted}`);
    };
    const productList = ()=> {
        navigate('/products')
    }

    const cartTotal = data?.reduce((sum:number, item:any) => sum + item.product.price * item.quantity, 0) ;

    if (isLoading) return <p className="text-center text-lg mt-10">isLoading...</p>;
    if (isError) return <p className="text-center text-red-500 mt-10">Error product</p>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">


            <div className="w-full lg:w-2/3">
                <h1 className="text-3xl font-semibold mb-6">My Cart</h1>
                {data?.map((item) => (
                    <div key={item.id} className="flex  py-5 items-center gap-6">
                        <img src={item.product.image} alt={item.product.name} className="w-24 h-24 object-contain" />
                        <div className="flex-1">
                            <h2 className="font-bold text-lg">{item.product.name}</h2>
                            <p className="text-gray-500 text-sm">{item.product.description}</p>
                            <button onClick={() => click(item.product.id)}>details</button>
                        </div>
                        <section className="flex flex-col items-end gap-2">
                            <p className="font-bold text-lg">${item.product.price}</p>
                            <p className="text-sm">Quantity: {item.quantity}</p>

                            <button
                                onClick={() => handleDeleteItem(item.id)}
                                className="text-red-500 hover:underline text-sm"
                            >
                                Remove
                            </button>

                        </section>
                    </div>
                ))}

                <button onClick={productList}  className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4">Continue Shopping</button>
            </div>


            <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-xl shadow">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="flex justify-between mb-2">
                    <span>Cart Total:</span>
                    <span>${cartTotal.toFixed(2)}</span>
                </div>


                <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl">
                    <Order onSuccess={() => navigate('/orderItem')} />


                </button>

                <div className="mt-4">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        <span>Is this a gift?</span>
                    </label>
                    <label className="flex items-center gap-2 mt-2">
                        <input type="checkbox" />
                        <span>Delivery Instructions</span>
                    </label>

                </div>
            </div>
        </div>
    );
};

export default Cart;
