import { useRouter } from 'next/router';
import React, { useState } from 'react';


interface PagenationConfig {
    totalCount: number,
    itemsPerPage: number,
    currentPage: number
}

export default function Pagenation({ totalCount, itemsPerPage, currentPage }: PagenationConfig) {


    const [page, setCurrentPage] = useState(currentPage || 1);
    const router = useRouter();


    function handlerNextPage(pageNumber: number) {

        setCurrentPage(pageNumber);

        router.push({
            pathname: router.pathname,
            query: { ...router.query, page: pageNumber },
        });
    }

    return (
        <div className="container mx-auto lg:max-w-screen-xl py-3  flex gap-2  justify-center">
            {Array.from({ length: Math.ceil(totalCount / itemsPerPage) },
                (_, i) => i + 1).map((pageNumber) => (
                    <button
                        key={pageNumber}
                        className={`px-3 py-1 ${pageNumber === page ? 'bg-blue-500 text-white font-bold' : 'bg-gray-200 text-black'}`}
                        onClick={() => handlerNextPage(pageNumber)}>
                        {pageNumber}
                    </button>
                ))}
        </div>
    );
}
