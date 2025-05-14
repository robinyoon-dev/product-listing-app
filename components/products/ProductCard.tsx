'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { memo } from "react";


interface ProductCardProps {
    id: number;
    title: string; //상품명
    description: string; //상품 설명
    thumbnail: string; //썸네일 이미지 url
    rating: number; //평점
    reviews: number; //리뷰 수
}

const ProductCard = ({ id, title, description, thumbnail, rating, reviews }: ProductCardProps) => {
    return (
        <Card>
            <CardHeader>
                <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-2">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </div>


            </CardContent>
            <CardFooter>
                <div className="w-full flex flex-row justify-between">
                    <p>{`${rating} / 5`}</p>
                    <p>{`${reviews} reviews`}</p>
                </div>

            </CardFooter>
        </Card>

    );
};

export const MemoizedProductCard = memo(ProductCard);