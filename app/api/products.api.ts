'use server'

export const getProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products`);
    const data = res.json();
    return data;
}