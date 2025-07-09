const MainPages = () => {




    return (
        <div>
            <div className="flex  justify-center items-center gap-37  py-12">
                <div>
                    <h1 className="text-5xl md:text-6xl font-light italic ">
                        Aromas that <br/> lead to peace
                    </h1>
                    <p className="mt-6 text-lg text-slate-600">
                        Fill your space with harmony and comfort with <span
                        className="font-semibold text-amber-500  ">GrowNest</span>
                    </p>
                    <button
                        className="mt-6 px-6 py-3 border-2  text-white bg-slate-900 hover:bg-slate-800 rounded-md text-sm font-medium">
                        <a href='/catalog' >Shop now</a>
                    </button>
                </div>

                <div className="flex justify-center items-center ">
                    <img
                        src="src/assets/candle.jpg"
                        alt="Aroma Candle"
                        className="w-full max-w-xl rounded-lg shadow-md "
                    />
                </div>
            </div>
            {/*///////////////////////////////////////////////////////////////////////////////////////*/}
            <div className="flex lg:flex-row items-center justify-evenly gap-19 mt-30">
                <div  className='flex justify-start'>
                    <img
                        src="/src/assets/foto-candle.png"
                        alt="Palo Santo Gift"
                        className="w-145 rounded-xl "
                    />
                </div>


                <div >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Special Offer for New Customers!
                    </h2>
                    <p className="text-xl font-semibold text-gray-800 mb-2">
                        Your first order comes with a free gift!
                    </p>
                    <p className="mb-4 text-gray-700">
                        Place your first order now and receive a fragrant Palo Santo stick as a gift.
                    </p>

                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>Clears the space of negative energy</li>
                        <li>Helps you relax and feel balanced</li>
                        <li>Has a pleasant woody aroma</li>
                    </ul>

                    <p className="font-semibold text-gray-900 mb-1">
                        How to get your gift?
                    </p>
                    <p className="mb-4 text-gray-700">
                        Simply place an order and we will automatically include Palo Santo in your package!
                    </p>

                    <p className="text-sm text-red-700 font-medium mb-6">
                        Limited-time offer — don’t miss out!
                    </p>

                    <a
                        href="/catalog"
                        className="inline-block px-6 py-3 bg-white text-pink-600 border border-pink-600 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition"
                    >
                        Go to Catalog
                    </a>
                </div>
            </div>


        </div>
    );
};

export default MainPages;
