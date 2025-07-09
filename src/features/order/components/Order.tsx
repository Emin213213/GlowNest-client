import {useCreateOrder} from "@/features/order/hooks.ts";

const Order = ({ onSuccess }: { onSuccess: () => void }) => {
    const { mutate, isLoading } = useCreateOrder();

    const handleCreateOrder = () => {
        mutate(undefined, {
            onSuccess: () => {
                onSuccess();
            },
        });
    };



    return (
        <button
            onClick={handleCreateOrder}
            disabled={isLoading}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl"
        >
            {isLoading ? 'Creating...' : 'Place Order'}
        </button>
    );
};

export default Order;
