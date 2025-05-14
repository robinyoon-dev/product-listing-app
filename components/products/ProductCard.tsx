'use client'


import { memo } from "react";
import { ViewMode } from "@/lib/types/products";
import GridCard from "./GridCard";
import ListCard from "./ListCard";

interface ProductCardProps {
    id: number;
    title: string; //상품명
    description: string; //상품 설명
    thumbnail: string; //썸네일 이미지 url
    rating: number; //평점
    reviews: number; //리뷰 수
    type: ViewMode; //뷰 모드
}

const ProductCard = ({ id, type, title, description, thumbnail, rating, reviews }: ProductCardProps) => {
    if (type === 'grid') {
        return <GridCard id={id} title={title} description={description} thumbnail={thumbnail} rating={rating} reviews={reviews} />
    }
    return (
        <ListCard id={id} title={title} description={description} thumbnail={thumbnail} rating={rating} reviews={reviews} />
    );
};

export const MemoizedProductCard = memo(ProductCard);