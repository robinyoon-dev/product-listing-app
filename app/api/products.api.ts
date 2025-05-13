'use server'

import { LIMIT } from "@/lib/definition/products";

export const getProducts = async (page: number) => {

    const skip = (page - 1) * LIMIT;
    const searchParams = `limit=${LIMIT}&skip=${skip}`;
    const res = await fetch(`https://dummyjson.com/products?${searchParams}`);
    const data = res.json();
    return data;
}