import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { addCArd } from "@/features/products/api.ts";
import { queryClient } from "@/main.tsx";
import { useMutation } from "@tanstack/react-query";
import type { Product } from "@/features/products/type.ts";
import type { RootState } from "@/redux/store.ts";
import { useSelector } from "react-redux";


const ProductItem = ({ item }: { item: Product }) => {
    // const dispatch: AppDispatch = useDispatch();
    const userId = useSelector((state: RootState) => state.user.userId);
    const quantity = 1;



    const mutation = useMutation({
        mutationFn: () => addCArd({ productId: item.id, quantity }),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['card'] }),
    });

    const handleAddToCart = () => {
        if (!userId) {
            console.error("User not logged in");
        }
        mutation.mutate();
    };

    return (
        <li>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <Link to={`/product/${item.id}`}>
                <Button variant={"link"}>details</Button>
            </Link>
            <Button onClick={handleAddToCart}>cart</Button>
        </li>
    );
};

export default ProductItem;
