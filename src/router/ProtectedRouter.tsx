import type {ReactNode} from "react";
import {useQuery} from "@tanstack/react-query";
import {fetchUser} from "../features/auth/api.ts";
import {Navigate} from "react-router";

const ProtectedRouter = ({children} : {children: ReactNode}) => {
    const {data, isLoading, isError} = useQuery({
        queryKey: ["auth-check"],
        queryFn: fetchUser,
        retry: false,
        staleTime: 1000 * 60 * 5
    })

    if(isLoading) return <p>Loading...</p>
    if(isError || !data) return <Navigate to={"/login"} replace/>

    return children
};

export default ProtectedRouter;