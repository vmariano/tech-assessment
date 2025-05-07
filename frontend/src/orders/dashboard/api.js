import {useQuery} from "@tanstack/react-query";

//TODO: implement api connection
async function getOrders() {
    // Simulating API delay with setTimeout
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    orderName: "Order 1",
                    description: "Description 1",
                },
                {
                    id: 2,
                    orderName: "Order 2",
                    description: "Description 2",
                },
                {
                    id: 3,
                    orderName: "Order 3",
                    description: "Description 3",
                }
            ]);
        }, 3000);
    });
}



/**
 * Hook to return / fetch data.
 */
export const useGetOrders = () => {
    return useQuery({
        queryKey: ['orders'],
        queryFn: () =>  getOrders(),
    })
}

