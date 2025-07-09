import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Register from "./features/auth/pages/Register.tsx";
import Login from "./features/auth/pages/Login.tsx";
import Profile from "./features/auth/components/Profile.tsx";
import ProtectedRouter from "./router/ProtectedRouter.tsx";
import Home from "./pages/Home.tsx";
import ProductDetails from "./features/products/pages/ProductDetails.tsx";
import ProductList from "@/features/products/components/ProductList.tsx";
import ProductCatalog from "@/features/products/pages/ProductCatalog.tsx";
import ProductDelivery from "@/features/products/components/ProductDelivery.tsx";
import Cart from "@/features/products/components/Cart.tsx";
import {store} from "@/redux/store.ts";
import { Provider } from "react-redux";
import Contacts from "@/features/products/components/Contacts.tsx";
import Order from "@/features/order/components/Order.tsx";
import OrderItem from "@/features/order/components/OrderItem.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {index: true, element: <Home/>},
            {path: '/products', element: <ProductList/>},
            {path: '/catalog', element: <ProductCatalog/>},
            {path: '/card', element: <Cart/>},
            {path:'/order',element:<Order/>},
            {path:'/orderitem',element:<OrderItem/>},
            {path:'/contacts',element:<Contacts/>},
            {path: 'delivery', element: <ProductDelivery/>},
            {path: '/product/:id', element: <ProductDetails/>},
            {path: '/register', element: <Register/>},
            {path: "/login", element: <Login/>},
            {path: "/profile", element: <ProtectedRouter> <Profile/></ProtectedRouter>}
        ]
    }
]);


export const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>


                <RouterProvider router={router}/>
            </Provider>
        </QueryClientProvider>
    </StrictMode>,
)
