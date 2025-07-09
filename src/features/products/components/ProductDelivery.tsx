import Footer from "@/features/products/components/Footer.tsx";

const ProductDelivery = () => {




    return (
        <div>
            <div className="max-w-4xl mx-auto py-10 px-4 text-gray-800 leading-relaxed">
                <h1 className="text-4xl font-bold text-center mb-10">
                    Payment, Exchange & Return Policy
                </h1>

                <h2 className="text-xl font-semibold mb-3 text-center">Delivery:</h2>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li>
                        Delivery is carried out by the Nova Poshta postal company.
                    </li>
                    <li>
                        Delivery to a Nova Poshta branch. The current list of pickup centers, delivery schedules,
                        and courier service terms are available on the official website of the carrier.
                    </li>
                    <li>
                        Delivery across Ukraine – according to the current carrier tariffs, can be arranged
                        individually.
                    </li>
                    <li>
                        If the order is not picked up and not paid for within 7 days after delivery to the Nova Poshta
                        branch,
                        it will be returned to the sender and the order will be canceled.
                    </li>
                </ul>

                <h2 className="text-xl font-semibold mb-3 text-center">Payment:</h2>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li>
                        Orders can be paid in cash upon receipt at Nova Poshta or via bank transfer based on an invoice.
                    </li>
                    <li>
                        You can easily and securely pay online when placing your order using a bank card (Visa /
                        MasterCard).
                    </li>
                    <li>
                        The payment system ensures the protection of your data according to international security
                        standards.
                    </li>
                </ul>

                <h2 className="text-xl font-semibold mb-3 text-center">Exchange Conditions:</h2>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li>Within 14 days, excluding the day of purchase.</li>
                    <li>The product has not been used.</li>
                    <li>Its original appearance, consumer properties, seals, and labels are preserved.</li>
                    <li>Receipt or sales document is present.</li>
                    <li>Exchange is possible for the same product.</li>
                    <li>Exchange is also possible for any other item, even at a different price.</li>
                </ul>

                <h2 className="text-xl font-semibold mb-3 text-center">
                    Return in Case of Defective Product:
                </h2>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li>Refunds are processed based on the product price at the time of purchase.</li>
                    <li>Funds paid for the product are returned on the day of contract termination.</li>
                    <li>
                        If immediate refund is not possible – it will be done within 7 days, unless otherwise agreed by
                        both parties.
                    </li>
                </ul>

                <h2 className="text-xl font-semibold mb-3 text-center">Reasons for Refusal:</h2>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li>
                        The product was used and its original condition, properties, seals, and labels were not
                        preserved;
                        the receipt was not provided.
                    </li>
                    <li>More than 14 days have passed since the date of purchase.</li>
                    <li>
                        The product belongs to categories listed in Annex 3 of the Resolution of the Cabinet of
                        Ministers of Ukraine
                        dated March 19, 1994, No. 172 "On implementation of certain provisions of the Law of Ukraine 'On
                        Consumer Protection'".
                    </li>
                </ul>

                <h2 className="text-xl font-semibold mb-3 text-center">
                    Aroma Stick Replacement Conditions (if the scent is not suitable):
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>If 1 stick was used from the package</strong></li>
                    <li><strong>If the package was opened carefully and has no damage (presentable condition
                        preserved)</strong></li>
                    <li><strong>Less than 14 days have passed since the order</strong></li>
                    <li><strong>Return shipping is paid by the customer</strong></li>
                </ul>
            </div>
            <Footer/>
        </div>
    );
};

export default ProductDelivery;