import Card from '@/Components/Card';
import CardOverview from '@/Components/CardOverview';
import AppLayout from '@/Layouts/AppLayout'
import { Head, Link, usePage } from '@inertiajs/react'
import { IconArrowRight, IconUserBolt, IconUserCheck, IconUsers } from '@tabler/icons-react';
import React from 'react'

export default function Index() {

    const { auth, users, users_count, roles_count, permissions_count } = usePage().props;

    return (
        <>
            <Head title='Dashboard'/>
            <div className='font-bold text-sky-600 text-xl mb-5'>
                OVERVIEW
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='col-span-12 lg:col-span-2'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <CardOverview
                            title={'Users'}
                            subtitle={'Total users'}
                            color={'bg-sky-100 text-sky-700'}
                            icon={<IconUsers size={'20'} strokeWidth={'1.5'}/>}
                            className={'shadow-sky-300'}
                        >
                            {users_count}
                        </CardOverview>
                        <CardOverview
                            title={'Roles'}
                            subtitle={'Total roles'}
                            color={'bg-indigo-100 text-indigo-700'}
                            icon={<IconUserCheck size={'20'} strokeWidth={'1.5'}/>}
                            className={'shadow-indigo-300'}
                        >
                            {roles_count}
                        </CardOverview>
                        <CardOverview
                            title={'Permissions'}
                            subtitle={'Total permissions'}
                            color={'bg-teal-100 text-teal-700'}
                            icon={<IconUserBolt size={'20'} strokeWidth={'1.5'}/>}
                            className={'shadow-teal-300'}
                        >
                            {permissions_count}
                        </CardOverview>
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-1'>
                    <div className='bg-white rounded-lg'>
                        <div className='border-b px-6 py-3'>
                            <div className='flex items-center gap-2'>
                                <IconUsers strokeWidth={'1.5'} size={'20'}/>
                                <h1 className='font-semibold text-sm uppercase'>List Users</h1>
                            </div>
                        </div>
                        <div className='px-6 py-4'>
                            <div className='flex flex-col flex-wrap divide-y divide-dashed gap-2'>
                                {users.map((user, i) => (
                                    <div className={`flex flex-row gap-4 items-center ${i === 0 ? 'pb-2' : 'py-2'}`} key={i}>
                                        <img src={user.avatar} className='w-12 h-12 rounded-full'/>
                                        <div className=''>
                                            <span className='font-semibold text-sm'>{user.name}</span>
                                            <p className='text-xs text-gray-400'>{user.email}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='border-t px-6 py-3'>
                            <Link href='/apps/users' className='flex items-center gap-1 justify-center group font-semibold text-gray-600 hover:text-sky-500'>
                                View all users <IconArrowRight size={'20'} strokeWidth={'1.5'} className='group-hover:text-sky-500 group-hover:translate-x-1 duration-300'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Index.layout = page => <AppLayout children={page}/>
