import {flexRender, getCoreRowModel, useReactTable} from '@tanstack/react-table';
import {useGetOrders} from "./api.js";

const columns = [
    {
        accessorKey: 'id',
        header: '#',
        cell: props => props.getValue(),
    },
    {
        accessorKey: 'orderName',
        header: 'Order name',
        cell: props => props.getValue(),

    },
    {
        accessorKey: 'description',
        header: 'Description',
        cell: props => props.getValue(),
    }
];

function OrdersList() {
    const { data = [] } = useGetOrders();
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