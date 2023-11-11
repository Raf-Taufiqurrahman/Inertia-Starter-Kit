import AppLayout from '@/Layouts/AppLayout'
import { Head, usePage } from '@inertiajs/react'
import { IconCheck, IconDatabaseOff, IconPlus, IconUserCheck } from '@tabler/icons-react'
import Table from '@/Components/Table'
import Pagination from '@/Components/Pagination'
import React from 'react'
import Search from '@/Components/Search'
import Button from '@/Components/Button'
import ActionButton from '@/Components/ActionButton'

export default function Index() {

    // destruct roles from props
    const { roles } = usePage().props;

    return (
        <>
            <Head title='Data Roles'/>
            <div className='mb-5'>
                <div className='flex flex-row items-center md:justify-between gap-5'>
                    <div className='lg:w-2/6 xl:w-1/6'>
                        <Button
                            label='Add New Role'
                            type={'link'}
                            icon={<IconPlus size={'20'} strokeWidth={'1.5'}/>}
                            className={'bg-white text-gray-700'}
                            href={'/apps/roles/create'}
                            added={true}
                        />
                    </div>
                    <div className='w-full'>
                        <Search
                            url={'/apps/roles'}
                            placeholder={'Search data roles by name...'}
                        />
                    </div>
                </div>
            </div>
            <Table.Card title={'LIST ROLES'} icon={<IconUserCheck strokeWidth={'1.5'} size={'20'}/>}>
                <Table>
                    <Table.Thead>
                        <tr>
                            <Table.Th className={'w-10'}>#</Table.Th>
                            <Table.Th>Role Name</Table.Th>
                            <Table.Th>Permissions</Table.Th>
                            <Table.Th>Action</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {roles.data.length ?
                            roles.data.map((role, i) => (
                            <tr key={i}>
                                <Table.Td>{++i + (roles.current_page-1) * roles.per_page}</Table.Td>
                                <Table.Td>{role.name}</Table.Td>
                                <Table.Td>
                                    {role.name !== 'super-admin' ?
                                        <div className='flex flex-wrap gap-x-3 gap-y-2 items-center'>
                                            {role.permissions.map((permission, x) => (
                                                <div className='px-3 py-0.5 bg-sky-100 text-sky-500 rounded-xl flex items-center gap-1' key={x}>
                                                    <IconCheck size={'15'} strokeWidth={'2'}/> {permission.name}
                                                </div>
                                            ))}
                                        </div>
                                        :
                                        <div className='px-3 py-0.5 bg-sky-100 text-sky-500 rounded-xl flex items-center gap-1 w-fit'>
                                            <IconCheck size={'15'} strokeWidth={'2'}/> all permissions
                                        </div>
                                    }
                                </Table.Td>
                                <Table.Td>
                                    <div className='flex items-center gap-2'>
                                        <ActionButton
                                            url={`/apps/roles/${role.id}/edit`}
                                        />
                                        <ActionButton
                                            type={'delete'}
                                            url={`/apps/roles`}
                                            id={role.id}
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
                                    <span className='text-gray-500'>roles data</span> <span className='text-rose-500 underline underline-offset-2'>not found.</span>
                                </>
                            }/>
                        }
                    </Table.Tbody>
                </Table>
            </Table.Card>
            {roles.last_page !== 1 && (<Pagination links={roles.links}/>)}
        </>
    )
}

Index.layout = page => <AppLayout children={page}/>
