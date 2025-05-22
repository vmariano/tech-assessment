import {useMutation, useQuery} from "@tanstack/react-query";
import axios from 'axios';

const BACKEND_MAIN_URL = 'http://localhost:3000';

async function getOrders() {
    const { data = [] } = await axios.get(`${BACKEND_MAIN_URL}/orders`);
    return data;
}

/**
 * Hook to return / fetch data.
 */
export const useGetOrders = () => {
    return useQuery({
        queryKey: ['orders'],
        queryFn: getOrders,
    })
}

/**
 * Hook to save data.
 */
export const useCreateOrder = (order) => {
    return useMutation({
        mutationFn: () => console.log(`save order: ${order}`),
    })
}