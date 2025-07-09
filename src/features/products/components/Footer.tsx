const Footer = () => {
    return (
        <footer
            className="flex justify-center mt-20 text-gray-800 bg-cover bg-center bg-no-repeat"

        >
            <div className="w-full py-10 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3   rounded-xl shadow-lg px-10 py-10">

                    <div className="text-center text-left">
                        <img src="/src/GrowNest-Logo.png" alt="GlowNest Logo" className="h-20 mx-auto md:mx-0 mb-2" />
                        <a href="#" className="hover:text-orange-500 transition block mt-2">
                            Return & Exchange Policy
                        </a>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="font-bold mb-3 text-gray-900 text-md tracking-wider">NAVIGATION</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-orange-500 transition">Catalog</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition">Top Sales</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition">Reviews</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition">About Us</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition">Contacts</a></li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="font-bold mb-3 text-gray-900 text-md tracking-wider">CONTACT</h4>
                        <a href="tel:+380638150360" className="hover:text-orange-500 transition block mb-2">
                            +380 63 815 0360
                        </a>

                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
