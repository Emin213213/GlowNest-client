import emailjs from '@emailjs/browser';
import {useQuery} from "@tanstack/react-query";
import {fetchUser} from "@/features/auth/api.ts";
import {useOrders} from "@/features/order/hooks.ts";

emailjs.init({
    publicKey: "egzG4gROUKpKsa-gl"
})


export const EmailSent = ({order}) => {


    const {data: user} = useQuery({
        queryKey: ['login'],
        queryFn: fetchUser,
        retry: false,
        staleTime: 1000 * 60 * 5
    });


    const hadndlerCLick = () => {

        if (!user?.email) {
            console.log('user email not found')
            return
        }

        const userSend = {
            email: user.email,
            order_id: order.id,
            orders: order.item.map((el) => ({
                name: el.product.name,
                price: el.price,
                quantity: el.quantity
            }))
        }
        emailjs.send('service_3tokakh', 'template_togcpdj', userSend).then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
                console.log('FAILED...', error);
            }
        )
    }


    return (
        <button onClick={hadndlerCLick}>Оформить заказ</button>
    );
};
