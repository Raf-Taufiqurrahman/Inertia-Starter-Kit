import Button from '@/Components/Button'
import Card from '@/Components/Card'
import Input from '@/Components/Input'
import MultiSelect from '@/Components/MultiSelect'
import AppLayout from '@/Layouts/AppLayout'
import { Head, useForm, usePage } from '@inertiajs/react'
import { IconPencilPlus, IconPencilX, IconUserCheck } from '@tabler/icons-react'
import toast from 'react-hot-toast'
import React from 'react'

export default function Edit() {

    // destruct role and permissions from usePage props
    const { role, permissions } = usePage().props;

    // destruct data, setData, post, transform and errors from useForm
    const { data, setData, post, transform, errors } = useForm({
        name: role.name,
        permissionsData : role.permissions,
        _method: 'put'
    });

    // define set permissions value
    const setPermissions = (value) => {
        setData('permissionsData', value)
    }

    // transform data before submit
    transform((data) => ({
        ...data,
        permissions: data.permissionsData.map(permission => permission.value)
    }))

    // define method handle form
    const handleForm = async (e) => {
        e.preventDefault();

        post(`/apps/roles/${role.id}`, {
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
        });
    }

    return (
        <>
            <Head title='Edit Role'/>
            <Card
                title='Edit Role'
                icon={<IconUserCheck size={'20'} strokeWidth={'1.5'}/>}
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
                        <MultiSelect
                            label={'Permissions'}
                            options={permissions}
                            value={data.permissionsData}
                            onChange={setPermissions}
                            errors={errors.permissions}
                        />
                    </div>
                    <div className='flex items-center gap-4'>
                        <Button
                            label={'Save Data'}
                            icon={<IconPencilPlus strokeWidth={'1.5'} size={'20'}/>}
                            className={'bg-teal-200 text-teal-500 border border-teal-300 hover:border-teal-500'}
                        />
                        <Button
                            label={'Cancel'}
                            icon={<IconPencilX strokeWidth={'1.5'} size={'20'}/>}
                            className={'bg-rose-200 text-rose-500 border border-rose-300 hover:border-rose-500'}
                            type={'link'}
                            href={'/apps/roles'}
                        />
                    </div>
                </form>
            </Card>
        </>
    )
}

Edit.layout = page => <AppLayout children={page}/>
