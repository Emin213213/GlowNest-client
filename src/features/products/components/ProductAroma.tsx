const ProductAroma = () => {
    return (
        <div className="mt-30">
            <h2 className="flex justify-center text-3xl font-bold mb-4">Choose Your Scent</h2>
            <p className="text-center text-gray-600 mb-6">
                Sweet, floral, fresh, fruity, woody, or spicy — find the scent that fits your mood.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                {/* Vanilla */}
                <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105" style={{ height: "350px" }}>
                    <img
                        src="/src/assets/Aroma/Vanilla-3-WP.jpg"
                        alt="Vanilla"
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 text-white px-4">
                        <h3 className="text-3xl font-bold mb-2">Vanilla</h3>
                        <p className="text-sm">Warm, sweet, and comforting. A timeless classic scent loved by many.</p>
                    </div>
                </div>

                {/* Fresh Cotton */}
                <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105" style={{ height: "350px" }}>
                    <img
                        src="/src/assets/Aroma/istockphoto-1333742146-612x612.jpg"
                        alt="Fresh Cotton"
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 text-white px-4">
                        <h3 className="text-3xl font-bold mb-2">Fresh Cotton</h3>
                        <p className="text-sm">Crisp, clean, and refreshing. Reminds you of freshly washed linens.</p>
                    </div>
                </div>

                {/* Palo Santo */}
                <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105" style={{ height: "350px" }}>
                    <img
                        src="/src/assets/Aroma/Palo-Santo-scaled.jpg"
                        alt="Palo Santo"
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 text-white px-4">
                        <h3 className="text-3xl font-bold mb-2">Palo Santo</h3>
                        <p className="text-sm">Woody and spiritual, known for its calming and purifying qualities.</p>
                    </div>
                </div>

                {/* Rose */}
                <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105" style={{ height: "350px" }}>
                    <img
                        src='/src/assets/Aroma/rose.jpg'
                        alt="Rose"
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 text-white px-4">
                        <h3 className="text-3xl font-bold mb-2">Rose</h3>
                        <p className="text-sm">Elegant and romantic, rose brings floral sophistication to any moment.</p>
                    </div>
                </div>

                {/* Citrus Zest */}
                <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105" style={{ height: "350px" }}>
                    <img
                        src="/src/assets/Aroma/Citrus Zest.jpg"
                        alt="Citrus Zest"
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 text-white px-4">
                        <h3 className="text-3xl font-bold mb-2">Citrus Zest</h3>
                        <p className="text-sm">Bright, juicy, and energizing — awakens your senses instantly.</p>
                    </div>
                </div>

                {/* Sandalwood */}
                <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105" style={{ height: "350px" }}>
                    <img
                        src="/src/assets/Aroma/Sandalwood.jpg"
                        alt="Sandalwood"
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 text-white px-4">
                        <h3 className="text-3xl font-bold mb-2">Sandalwood</h3>
                        <p className="text-sm">Earthy, creamy, and smooth — brings a sense of grounded tranquility.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductAroma;
