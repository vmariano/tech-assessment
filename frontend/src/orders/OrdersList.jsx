import {flexRender, getCoreRowModel, useReactTable} from '@tanstack/react-table';
import {useGetOrders} from "./api.js";
import './OrdersList.css';
import {useContext, useEffect} from "react";
import DashboardContext from "../contexts/DashboardContext.jsx";

const columns = [
    {
        accessorKey: 'id',
        header: '#',
        cell: props => props.getValue(),
        size: 30,
    },
    {
        accessorKey: 'name',
        header: 'Order name',
        cell: props => props.getValue(),
        size: 150
    },
    {
        accessorKey: 'description',
        header: 'Description',
        cell: props => props.getValue(),
        size: 250
    }
];

function OrdersList() {
    const { data = [] } = useGetOrders();
    const { setTotalOrders } = useContext(DashboardContext);
    setTotalOrders(data.length);

    const table = useReactTable({
        data: data,
        columns: columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <table width={table.getTotalSize()}>
            <thead>
                {table.getHeaderGroups().map(headerGroup => {
                    return (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => {
                            return (<th width={header.column.getSize()} key={header.id}>{header.column.columnDef.header}</th>);
                        })}
                    </tr>);
                })}
            </thead>
            <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map(cell => {
                            return <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default OrdersList;
