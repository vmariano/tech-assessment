import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//TODO: this seems to throws a query client provider error, probably because is init with `undefined`
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import Orders from "./orders/Orders.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
import { DashboardProvider } from "./contexts/DashboardContext.jsx";

const queryClient = new QueryClient();

function App() {
    const [count, setCount] = useState(0)
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <DashboardProvider>
                    <div>
                        <Dashboard />
                    </div>
                    <Orders/>
                    <ReactQueryDevtools/>
                </DashboardProvider>
            </QueryClientProvider>
        </>
    )
}

export default App
