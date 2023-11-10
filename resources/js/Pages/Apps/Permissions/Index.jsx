import AppLayout from '@/Layouts/AppLayout'
import { Head, usePage } from '@inertiajs/react'
import { IconDatabaseOff, IconUserBolt } from '@tabler/icons-react'
import Table from '@/Components/Table'
import Pagination from '@/Components/Pagination'
import React from 'react'
import Search from '@/Components/Search'

export default function Index() {

    // destruct permissions from props
    const { permissions } = usePage().props;

    return (
        <>
            <Head title='Data Permissions'/>
            <div className='mb-5'>
                <Search
                    url={'/apps/permissions'}
                    placeholder={'Search data permissions by name...'}/>
            </div>
            <Table.Card title={'LIST PERMISSIONS'} icon={<IconUserBolt strokeWidth={'1.5'} size={'20'}/>}>
                <Table>
                    <Table.Thead>
                        <tr>
                            <Table.Th className={'w-10'}>#</Table.Th>
                            <Table.Th>Permission Name</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {permissions.data.length ?
                            permissions.data.map((permission, i) => (
                            <tr key={i}>
                                <Table.Td>{++i + (permissions.current_page-1) * permissions.per_page}</Table.Td>
                                <Table.Td>{permission.name}</Table.Td>
                            </tr>
                        )) :
                            <Table.Empty colSpan={8} message={
                                <>
                                    <div className='flex justify-center items-center text-center mb-2'>
                                        <IconDatabaseOff className='w-10 h-10 text-gray-400' strokeWidth={'1.2'}/>
                                    </div>
                                    <span className='text-gray-500'>Permissions data</span> <span className='text-rose-500 underline underline-offset-2'>not found.</span>
                                </>
                            }/>
                        }
                    </Table.Tbody>
                </Table>
            </Table.Card>
            {permissions.last_page !== 1 && (<Pagination links={permissions.links}/>)}
        </>
    )
}

Index.layout = page => <AppLayout children={page}/>
