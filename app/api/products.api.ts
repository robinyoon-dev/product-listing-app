'use server'

import { LIMIT } from "@/lib/definition/products";

export const getProducts = async (page: number) => {
    const skip = (page - 1) * LIMIT;
    const searchParams = `limit=${LIMIT}&skip=${skip}`;
    const res = await fetch(`https://dummyjson.com/products?${searchParams}`);
    const data = res.json();
    return data;
}

/**
 * 검색 키워드를 받아서 검색 결과를 반환합니다.
 * @param search 검색 키워드
 * @returns 검색 결과
 * @see https://dummyjson.com/docs/products#products-search
 */
export const getSearchedProducts = async (search: string, page: number) => {
    const skip = (page - 1) * LIMIT;
    const searchParams = `limit=${LIMIT}&skip=${skip}`;
    //궁금증: search API 사용시에 페이지네이션 불가능한가?
    const res = await fetch(`https://dummyjson.com/products/search?q=${search}&${searchParams}`);
    const data = res.json();
    return data;
}