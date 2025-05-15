'use client'

import { ViewMode } from "@/lib/types/products";
const ProductsContainer = ({ children, viewMode }: { children: React.ReactNode, viewMode: ViewMode }) => {

    const GRID_STYLE = 'grid grid-cols-2 lg:grid-cols-4 gap-4';
    const LIST_STYLE = 'flex flex-col gap-4';
    const CONTAINER_STYLE = viewMode === 'list' ? LIST_STYLE : GRID_STYLE;

    return (
        <main className={`${CONTAINER_STYLE} px-5`}>
            {children}
        </main>
    )
}

export default ProductsContainer;