import { Outlet } from "react-router-dom";
import Header from "@/features/products/components/Header.tsx";
import {useSelector} from "react-redux";
import {useEffect} from "react";

const App = ({children}) => {



    const theme = useSelector((state) => state.thema.thema)

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div>
            <Header />
            {children}

            <Outlet />
        </div>
    );
};

export default App;
