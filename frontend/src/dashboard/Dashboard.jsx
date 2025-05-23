import './Dashboard.css'
import {useContext} from "react";
import DashboardContext from "../contexts/DashboardContext.jsx";

function Dashboard() {
    const { totalOrders } = useContext(DashboardContext);
    return (
        <div className={'dashboard'}>
            <h1>{totalOrders}</h1>
            <p>Total Orders</p>
        </div>
    )
}

export default Dashboard;
