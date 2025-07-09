import { useOrders } from "@/features/order/hooks.ts";
import {EmailSent} from "@/features/auth/components/EmailSent.tsx";

const OrderItem = () => {
    const { data, isLoading, isError } = useOrders();

    if (isLoading) return <p className="text-gray-500">Loading...</p>;
    if (isError) return <p className="text-red-500">Error loading orders</p>;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Your Orders</h2>

            <ul className="space-y-8">
                {data.map((order) => (
                    <li key={order.id} className="border rounded-lg shadow-md p-4 bg-white">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Order #{order.id}</h3>
                            <p className="text-gray-600 font-medium">Total: ${order.total}</p>
                        </div>

                        <ul className="divide-y">
                            {order.item.map((el) => (
                                <li key={el.id} className="py-4 flex gap-4 items-start">
                                    <img
                                        src={el.product.image}
                                        alt={el.product.name}
                                        className="w-20 h-20 object-cover rounded-md border"
                                    />
                                    <div className="flex-1">
                                        <p className="text-base font-medium">{el.product.name}</p>
                                        <p className="text-sm text-gray-500">{el.product.description}</p>
                                        <div className="text-sm mt-2 text-gray-700">
                                            <p>Quantity: {el.quantity}</p>
                                            <p>Price: ${el.price}</p>
                                            <p>Subtotal: ${el.price * el.quantity}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <EmailSent order={order}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderItem;
