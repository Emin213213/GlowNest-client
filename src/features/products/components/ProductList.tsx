import {useQuery} from "@tanstack/react-query";
import {fetchProductPagination} from "../api";
import ProductItem from "./ProductItem";
import {useState} from "react";
import {Input} from "@/components/ui/input";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

const ProductList = () => {
    const [inputVal, setInputVal] = useState('');
    const [page, setPage] = useState(1);
    const [sortOrder, setSortOrder] = useState<"" | "asc" | "desc">("")

    const {data, isLoading, isError} = useQuery({
        queryKey: ['product', page],
        queryFn: () => fetchProductPagination(page),
    });

    if (isLoading) return <p className="text-center text-lg">Loading...</p>;
    if (isError) return <p className="text-center text-red-500">Error loading products</p>;

    const filtered = (data?.products ?? []).filter(item =>
        item.name?.toLowerCase().includes(inputVal.toLowerCase())
    );

    const sorted = [...filtered]
        .sort((a, b) => new Date(b.createAt).getTime() - new Date(a.createAt).getTime())         .sort((a, b) => {
            if (sortOrder === "asc") return a.price - b.price;
            if (sortOrder === "desc") return b.price - a.price;
            return 0;
        });




    return (
        <div className="w-full max-w-7xl mx-auto py-6 px-4">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-6">
                <main>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sorted.map((item) => (
                            <li key={item.id}>
                                <ProductItem item={item}/>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-center gap-4 mt-6">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <button
                                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                                        disabled={page === 1}
                                    >
                                        <PaginationPrevious href="#"/>
                                    </button>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">{page}</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis/>
                                </PaginationItem>
                                <PaginationItem>
                                    <button onClick={() => setPage((prev) => prev + 1)}>
                                        <PaginationNext href="#"/>
                                    </button>
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </main>

                {/* Sidebar Filters */}
                <aside className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-md h-fit">
                    <h2 className="text-lg font-semibold mb-4">Product Filter</h2>

                    {/* Search input */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                            Search by name
                        </label>
                        <Input
                            className="w-full"
                            value={inputVal}
                            placeholder="Enter product name"
                            onChange={(e) => setInputVal(e.target.value)}
                        />
                    </div>

                    {/* Sort by Price */}
                    <div className="mb-6">
                        <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2 text-center">Sort by
                            Price</h3>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={() => setSortOrder("asc")}
                                className="px-4 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition shadow"
                            >
                                Lowest ↑
                            </button>
                            <button
                                onClick={() => setSortOrder("desc")}
                                className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition shadow"
                            >
                                Highest ↓
                            </button>
                        </div>
                    </div>

                    {/* Sort by Newest */}
                    <div>
                        <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2 text-center">Sort by
                            Date</h3>
                        <div className="flex justify-center">
                            <button
                                onClick={() => setSortOrder("")}
                                className="px-4 py-2 rounded-lg bg-zinc-600 text-white hover:bg-zinc-700 transition shadow"
                            >
                                Newest First
                            </button>
                        </div>
                    </div>
                </aside>

            </div>
        </div>
    );
};

export default ProductList;
