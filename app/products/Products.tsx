'use client';
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "@/components/products/ProductCard";
import { getRandomViewMode } from "@/lib/utils/products";

const Products = () => {
    const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

    const GRID_STYLE = 'grid grid-cols-4 gap-4';
    const LIST_STYLE = 'flex flex-col gap-4';
    const CONTAINER_STYLE = viewMode === 'list' ? LIST_STYLE : GRID_STYLE;

    useEffect(() => {
        const mode = getRandomViewMode();
        setViewMode(mode);
    }, []);

    return (
        <main className={CONTAINER_STYLE}>
            <p>View Mode: {viewMode}</p>
            <ProductCard id={""} name={""} price={0} description={""} imageUrl={""} />
        </main>
    )
}

export default Products;