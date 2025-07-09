import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ThemeToggleSwitch from "@/features/products/components/ThemeToggleSwitch";

const Header = () => {

    return (
        <div>
            <header className="flex justify-center align-top gap-26 items-center pt-2">
                <div>
                    <Link to="/">
                        <img src="src/GrowNest-Logo.png" className="h-35" />
                    </Link>
                </div>

                <ul className="flex gap-8 justify-center">
                    <li>
                        <Link to="/catalog" className="hover:text-orange-500">
                            Catalog
                        </Link>
                    </li>
                    <li>
                        <a href="#top" className="hover:text-orange-500">
                            Top sales
                        </a>
                    </li>
                    <li>
                        <a href="/contacts" className="hover:text-orange-500">
                            Contacts
                        </a>
                    </li>
                    <li>
                        <a href="/delivery" className="hover:text-orange-500">
                            Payment and deliverys
                        </a>
                    </li>
                    <a href="tel:+380638150360" className="hover:text-orange-500">
                        +380 63 815 0360
                    </a>
                    <Link to="/card">
                        <img className={"w-8  "} src='/src/assets/basket.png' />
                    </Link>
                </ul>

                <div className="flex items-center gap-5">
              
                    <Link to="/register">
                        <Button className="p-5 flex items-center">Sign up</Button>
                    </Link>

                </div>
            </header>
        </div>
    );
};

export default Header;
