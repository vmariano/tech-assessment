import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import axios from 'axios';

const BACKEND_MAIN_URL = 'http://localhost:3000';

async function getOrders() {
    const { data = [] } = await axios.get(`${BACKEND_MAIN_URL}/orders`);
    return data;
}

async function saveOrder(order) {
    console.log(order);
    return axios.post(`${BACKEND_MAIN_URL}/orders`, order);
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
export const useCreateOrder = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:  saveOrder,
        onSuccess: () => queryClient.invalidateQueries('orders'),
    })
}