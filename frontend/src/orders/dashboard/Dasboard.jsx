import {flexRender, getCoreRowModel, useReactTable} from '@tanstack/react-table';
import {useGetOrders} from "./api.js";

const columns = [
    {
        accessorKey: 'id',
        header: '#',
        cell: props => <td>{props.getValue()}</td>,
    },
    {
        accessorKey: 'orderName',
        header: 'Order name',
        cell: props => <td>{props.getValue()}</td>,

    },
    {
        accessorKey: 'description',
        header: 'Description',
        cell: props => <td>{props.getValue()}</td>,
    }
];

function Dashboard() {
    const { data = [] } = useGetOrders();
    const table = useReactTable({
        data: data,
        columns: columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <table>
            <thead>
            {table.getHeaderGroups().map(headerGroup => {
                return (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => {
                            return (<th key={header.id}>{header.column.columnDef.header}</th>
                            );
                        })}
                    </tr>
                );
            })}
            </thead>
            <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map(cell => {
                            return flexRender(cell.column.columnDef.cell, cell.getContext());
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Dashboard;