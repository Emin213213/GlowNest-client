// import ProductList from "../features/products/components/ProductList.tsx";
import MainPages from "@/features/products/components/MainPages.tsx";
import TopProduct from '@/features/products/components/TopProduct.tsx'
import ProductAroma from "@/features/products/components/ProductAroma.tsx";
import Footer from "@/features/products/components/Footer.tsx";


const Home = () => {


    return (
        <div className="min-w-[320px] min-h-screen overflow-x-auto">
            <div className="max-w-[1440px] mx-auto px-6">
                <MainPages/>
                < TopProduct/>
                < ProductAroma/>
                < Footer/>
                {/*<ProductList/>*/}
            </div>
        </div>


    );
};

export default Home;