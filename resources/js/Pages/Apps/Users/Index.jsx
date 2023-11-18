import AppLayout from '@/Layouts/AppLayout'
import { Head, usePage } from '@inertiajs/react'
import { IconCheck, IconDatabaseOff, IconPlus, IconUsers } from '@tabler/icons-react'
import Table from '@/Components/Table'
import Pagination from '@/Components/Pagination'
import React from 'react'
import Search from '@/Components/Search'
import Button from '@/Components/Button'
import ActionButton from '@/Components/ActionButton'

export default function Index() {

    // destruct users from props
    const { users } = usePage().props;

    return (
        <>
            <Head title='Data Users'/>
            <div className='mb-5'>
                <div className='flex flex-row items-center md:justify-between gap-5'>
                    <div className='lg:w-2/6 xl:w-1/6'>
                        <Button
                            label='Add New User'
                            type={'link'}
                            icon={<IconPlus size={'20'} strokeWidth={'1.5'}/>}
                            className={'bg-white text-gray-700 border hover:border-sky-500'}
                            href={'/apps/users/create'}
                            added={true}
                        />
                    </div>
                    <div className='w-full'>
                        <Search
                            url={'/apps/users'}
                            placeholder={'Search data users by name...'}
                        />
                    </div>
                </div>
            </div>
            <Table.Card title={'LIST USERS'} icon={<IconUsers strokeWidth={'1.5'} size={'20'}/>}>
                <Table>
                    <Table.Thead>
                        <tr>
                            <Table.Th className={'w-10'}>#</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Email</Table.Th>
                            <Table.Th>Roles</Table.Th>
                            <Table.Th>Action</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {users.data.length ?
                            users.data.map((user, i) => (
                            <tr key={i}>
                                <Table.Td>{++i + (users.current_page-1) * users.per_page}</Table.Td>
                                <Table.Td>{user.name}</Table.Td>
                                <Table.Td>{user.email}</Table.Td>
                                <Table.Td>
                                    <div className='flex flex-wrap gap-x-3 gap-y-2 items-center'>
                                        {user.roles.map((role, x) => (
                                            <div className='flex items-center gap-2' key={x}>
                                                <div className='border border-sky-100 bg-sky-100 text-sky-500'>
                                                    <IconCheck size={'15'} strokeWidth={'2'}/>
                                                </div>
                                                <div>{role.name}</div>
                                            </div>
                                        ))}
                                    </div>
                                </Table.Td>
                                <Table.Td>
                                    <div className='flex items-center gap-2'>
                                        <ActionButton
                                            url={`/apps/users/${user.id}/edit`}
                                        />
                                        <ActionButton
                                            type={'delete'}
                                            url={`/apps/users`}
                                            id={user.id}
                                        />
                                    </div>
                                </Table.Td>
                            </tr>
                        )) :
                            <Table.Empty colSpan={8} message={
                                <>
                                    <div className='flex justify-center items-center text-center mb-2'>
                                        <IconDatabaseOff className='w-10 h-10 text-gray-400' strokeWidth={'1.2'}/>
                                    </div>
                                    <span className='text-gray-500'>users data</span> <span className='text-rose-500 underline underline-offset-2'>not found.</span>
                                </>
                            }/>
                        }
                    </Table.Tbody>
                </Table>
            </Table.Card>
            {users.last_page !== 1 && (<Pagination links={users.links}/>)}
        </>
    )
}

Index.layout = page => <AppLayout children={page}/>
