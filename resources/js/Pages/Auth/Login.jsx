import AuthCard from '@/Components/AuthCard'
import Button from '@/Components/Button'
import InputGroup from '@/Components/InputGroup'
import AuthLayout from '@/Layouts/AuthLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import { IconAt, IconCheck, IconPassword, IconPlus } from '@tabler/icons-react'
import React from 'react'

export default function Login() {

    const {data, setData, post, errors} = useForm({
        email : '',
        password : '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        post(route('login'));
    }

  return (
    <>
        <Head title='Login'/>
        <AuthCard>
            <h1 className='text-xl font-bold mb-2 text-black'>Login</h1>
            <p className='text-gray-500 text-xs mb-5'>
                Selamat datang, masukan email dan kata sandi anda untuk melanjutkan.
            </p>
            <form onSubmit={handleSubmit}>
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
                <div className='flex flex-wrap items-center gap-2'>
                    <Button
                        className={'bg-sky-600 shadow shadow-sky-500 text-white'}
                        icon={<IconCheck size={'20'} strokeWidth={'1.5'}/>}
                        label={'Login'}
                    />
                </div>
            </form>
        </AuthCard>
        <div className='mt-5'>
            <div className='text-gray-500'>
                Belum punya akun ? <Link href='/register' className='text-rose-400 underline'>Daftar disini</Link>
            </div>
        </div>
    </>
  )
}

Login.layout = page => <AuthLayout children={page}/>
