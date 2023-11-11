import Card from '@/Components/Card'
import Input from '@/Components/Input'
import Button from '@/Components/Button'
import AppLayout from '@/Layouts/AppLayout'
import toast from 'react-hot-toast'
import { Head, useForm, usePage } from '@inertiajs/react'
import { IconUser, IconPencilCheck } from '@tabler/icons-react'
import React from 'react'

export default function Index() {

    // destruct user from usepage props
    const { user } = usePage().props

    // destruct data, setData, post, reset and errors from useForm
    const {data, setData, errors, post, reset} = useForm({
        name: user.name,
        email: user.email,
        avatar: '',
        password: '',
        _method: 'put'
    });

    // define method handle form
    const handleForm = async (e) => {
        e.preventDefault();

        post(`/apps/profile/${user.id}`, {
            onSuccess: () => {
                toast.success('Data successfully updated!',{
                    icon: '👏',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
            }
        })
    }

    return (
        <>
            <Head title='Profile'/>
            <div className='flex flex-col lg:flex-row items-start justify-center gap-6'>
                <div className='w-full lg:w-1/4'>
                    <div className='w-full md:max-w-xs mx-auto bg-white rounded-lg flex flex-col items-center justify-center text-center px-6 py-4'>
                        <img src={user.avatar} className='rounded-full w-20 h-20'/>
                        <div className='mt-5'>
                            <div className='font-bold text-sm lg:text-base line-clamp-1'>{user.name}</div>
                            <div className='text-xs text-gray-500 line-clamp-1'>{user.email}</div>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-3/4'>
                    <Card
                        title={'Profile'}
                        icon={<IconUser strokeWidth={'1.5'} size={'20'}/>}
                    >
                        <form onSubmit={handleForm}>
                            <div className='mb-4'>
                                <Input
                                    label={'Name'}
                                    type={'text'}
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    errors={errors.name}
                                />
                            </div>
                            <div className='mb-4'>
                                <Input
                                    label={'Email'}
                                    type={'email'}
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    errors={errors.email}
                                />
                            </div>
                            <div className='mb-4'>
                                <Input
                                    label={'Avatar'}
                                    type={'file'}
                                    onChange={e => setData('avatar', e.target.files[0])}
                                    errors={errors.avatar}
                                />
                            </div>
                            <div className='mb-4'>
                                <Input
                                    label={'Password'}
                                    type={'password'}
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                    errors={errors.password}
                                />
                            </div>
                            <div className='flex'>
                                <Button
                                    label={'Update Profile'}
                                    icon={<IconPencilCheck strokeWidth={'1.5'} size={'20'}/>}
                                    className={'bg-teal-700 text-white border-teal-500'}
                                />
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </>
    )
}

Index.layout = page => <AppLayout children={page}/>
