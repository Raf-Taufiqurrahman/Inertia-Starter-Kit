import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <>
            <Head title='Dashboard'/>
            test
        </>
    );
}

Dashboard.layout = page => <AppLayout children={page}/>
