'use server'

import { LIMIT } from "@/lib/definition/products";

export const getProducts = async () => {


    const searchParams = `limit=${LIMIT}`;
    const res = await fetch(`https://dummyjson.com/products?${searchParams}`);
    const data = res.json();
    return data;
}