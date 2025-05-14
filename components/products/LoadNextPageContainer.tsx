'use client'

import { useRef, useState } from "react";
import LoadingSpinner from "../common/loading/LoadingSpinner";

const LoadNextPageContainer = ({ totalElements }: {
    totalElements: number;
}) => {


    const [isLoading, setIsLoading] = useState(true);
    const [isLastPage, setIsLastPage] = useState(false);
    const loadNextPageRef = useRef<HTMLDivElement | null>(null);


    return (
        <div
            className="flex flex-row justify-center items-center w-full h-[100px] p-4"
            ref={loadNextPageRef}
        >
            {isLoading && <LoadingSpinner text="포켓몬 카드 리스트를 불러오는 중..." />}
            {isLastPage && <p>더 이상 불러올 수 없습니다.</p>}
        </div>
    )
}

export default LoadNextPageContainer;