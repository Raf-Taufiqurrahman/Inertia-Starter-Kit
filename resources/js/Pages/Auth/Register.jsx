import AuthCard from '@/Components/AuthCard'
import Button from '@/Components/Button'
import InputGroup from '@/Components/InputGroup'
import AuthLayout from '@/Layouts/AuthLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import { IconAbc, IconAt, IconCheck, IconPassword, IconPlus, IconUser } from '@tabler/icons-react'
import React from 'react'

export default function Register() {

    const {data, setData, post, errors} = useForm({
        name: '',
        email : '',
        password : '',
        password_confirmation: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        post(route('register'));
    }

  return (
    <>
        <Head title='Login'/>
        <AuthCard>
            <h1 className='text-xl font-bold mb-2 text-black'>Register</h1>
            <p className='text-gray-500 text-xs mb-5'>
                Selamat datang, daftarkan diri anda untuk melanjutkan.
            </p>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <InputGroup
                        label={'Nama'}
                        type={'text'}
                        placeholder={'Masukan nama'}
                        icon={<IconAbc size={'20'} strokeWidth={'1.5'} className='text-gray-400'/>}
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                        errors={errors.name}
                    />
                </div>
                <div className='mb-4'>
                    <InputGroup
                        label={'Email'}
                        type={'email'}
                        placeholder={'Masukan email'}
                        icon={<IconAt size={'20'} strokeWidth={'1.5'} className='text-gray-400'/>}
                        value={data.email}
                        onChange={e => setData('email', e.target.value)}
                        errors={errors.email}
                    />
                </div>
                <div className='mb-4'>
                    <InputGroup
                        label={'Kata Sandi'}
                        type={'password'}
                        placeholder={'Masukan kata sandi'}
                        icon={<IconPassword size={'20'} strokeWidth={'1.5'} className='text-gray-400'/>}
                        value={data.password}
                        onChange={e => setData('password', e.target.value)}
                        errors={errors.password}
                    />
                </div>
                <div className='mb-4'>
                    <InputGroup
                        label={'Konfirmasi Kata Sandi'}
                        type={'password'}
                        placeholder={'Masukan konfirmasi kata sandi'}
                        icon={<IconPassword size={'20'} strokeWidth={'1.5'} className='text-gray-400'/>}
                        value={data.password_confirmation}
                        onChange={e => setData('password_confirmation', e.target.value)}
                        errors={errors.password_confirmation}
                    />
                </div>
                <div className='flex flex-wrap items-center gap-2 mt-8'>
                    <Button
                        className={'bg-sky-600 shadow shadow-sky-500'}
                        icon={<IconPlus size={'20'} strokeWidth={'1.5'}/>}
                        label={'Daftar'}
                    />
                    <Button
                        className={'bg-gray-600 shadow shadow-gray-500'}
                        icon={<IconUser size={'20'} strokeWidth={'1.5'}/>}
                        label={'Sudah Punya Akun'}
                        type={'link'}
                        href={route('login')}
                    />
                </div>
            </form>
        </AuthCard>
    </>
  )
}

Register.layout = page => <AuthLayout children={page}/>
