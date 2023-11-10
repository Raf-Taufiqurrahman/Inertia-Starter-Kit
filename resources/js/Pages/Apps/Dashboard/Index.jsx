import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Index() {
    return (
        <>
            <Head title='Dashboard'/>
        </>
    )
}

Index.layout = page => <AppLayout children={page}/>
