import './Dashboard.css'

function Dashboard({total}) {
    return (
        <div className={'dashboard'}>
            <h1>{total}</h1>
            <p>Total Orders</p>
        </div>
    )
}

export default Dashboard;