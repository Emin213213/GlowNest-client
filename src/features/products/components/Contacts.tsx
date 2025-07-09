const ContactSection = () => {
    return (
        <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            {/* Left: Contact Info */}
            <div>
                <h2 className="text-4xl font-bold text-[#0B2038] mb-4">Contacts</h2>
                <div className="w-20 h-[2px] bg-pink-500 mb-6"></div>

                <p className="text-lg font-semibold mb-1">Phone:</p>
                <p className="mb-4 text-[#0B2038]">+380 63 815 0360</p>

                <p className="text-lg font-semibold mb-1">Email:</p>
                <p className="mb-6 text-[#0B2038]">13mail13469@gmail.com</p>

                <div className="flex gap-5">
                    <img className={'w-43 h-50'} src='/src/assets/qr-icon/photo_2025-06-28_17-37-12.jpg' />
                </div>
            </div>

            <form className="space-y-4 w-full">
                <input
                    type="text"
                    placeholder="Enter your name*"
                    className="w-full bg-gray-200 px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none"
                />
                <input
                    type="tel"
                    placeholder="Enter your phone number*"
                    className="w-full bg-gray-200 px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none"
                />
                <input
                    type="email"
                    placeholder="Enter your email*"
                    className="w-full bg-gray-200 px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none"
                />
                <textarea
                    rows={5}
                    placeholder="Enter your message"
                    className="w-full bg-gray-200 px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none resize-none"
                ></textarea>

                <button
                    type="submit"
                    className="bg-[#0B2038] text-white px-6 py-3 font-bold border border-pink-500 hover:bg-pink-500 hover:text-white transition"
                >
                    Send
                </button>
            </form>
        </section>
    );
};

export default ContactSection;
