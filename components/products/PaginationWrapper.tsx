'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ReactPaginate from 'react-paginate';
import { LIMIT } from '@/lib/definition/products';

export default function PaginationWrapper({ totalElements }: {
    totalElements: number;
}) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const pageNumber = Number(searchParams.get('page')) || 1;
    const pageNumberIndex = pageNumber > 0 ? pageNumber -1 : 0;

    const { push } = useRouter();
    const pageCount = Math.ceil(totalElements / LIMIT);


    const handlePageClick = (event: any) => {
        const newPageNumber = event.selected +1;
        push(createPageURL(newPageNumber));
    };

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(Array.from(searchParams.entries()));
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };


    return (
        <div className="w-full flex flex-row items-center justify-center mt-14" >
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                containerClassName='flex flex-row items-center justify-center gap-4 p-4 '
                pageClassName='p-2' //The classname on tag li of each page element.
                pageLinkClassName='font-regular hover:text-gray-500' //The classname on tag a of each page element.
                activeClassName="font-bold text-blue-500 hover:text-blue-300 "
                previousClassName='hover:text-gray-500'
                nextClassName='hover:text-gray-500'
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                forcePage={pageNumberIndex}
            />
        </div>
    );
}