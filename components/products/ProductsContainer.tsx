'use client'

import { getRandomViewMode } from "@/lib/utils/products";
import { useEffect, useState } from "react";

const ProductsContainer = ({ children }: { children: React.ReactNode }) => {

    const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

    const GRID_STYLE = 'grid grid-cols-4 gap-4';
    const LIST_STYLE = 'flex flex-col gap-4';
    const CONTAINER_STYLE = viewMode === 'list' ? LIST_STYLE : GRID_STYLE;

    useEffect(() => {
        const mode = getRandomViewMode();
        setViewMode(mode);
    }, []);

    return (

        <main className={`${CONTAINER_STYLE}`}>

            {children}
        </main>

    )
}

export default ProductsContainer;