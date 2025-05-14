'use server'

import { LIMIT } from "@/lib/definition/products";

export const getProducts = async (page: number, sortBy: string, order: string, query: string) => {
    const skip = (page - 1) * LIMIT;
    const searchParams = `limit=${LIMIT}&skip=${skip}&sortBy=${sortBy}&order=${order}`;

    const URL = query !== '' ? `/search?q=${query}&${searchParams}` : `?${searchParams}`;
    const res = await fetch(`https://dummyjson.com/products${URL}`);
    const data = res.json();
    return data;
}