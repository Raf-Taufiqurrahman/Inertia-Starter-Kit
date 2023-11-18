import { IconPencil, IconTrash } from '@tabler/icons-react'
import { Link, useForm } from '@inertiajs/react'
import Swal from 'sweetalert2'
import { toast } from 'react-hot-toast'
import React from 'react'
export default function ActionButton({ type, title, url, id }) {

    const { delete: destroy } = useForm();

    const deleteData = async (id) => {
        Swal.fire({
            title: 'Are you sure want delete this ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Nope'
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(`${url}/${id}`, {
                    onSuccess: () => {
                        toast.success('Data successfully deleted!',{
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
        })
    }

    return (
        <>
            {type == 'delete' ?
                <button onClick={() => deleteData(id)} className='bg-red-100 px-3 py-1 rounded-lg border border-red-100 hover:bg-red-200 hover:border-red-500 flex items-center gap-1 text-red-500'>
                    <IconTrash className='text-red-500' strokeWidth={'1.2'} size={'20'}/> {title}
                </button>
                :
                <Link href={url} className='bg-yellow-100 px-3 py-1 rounded-lg border border-yellow-100 hover:bg-yellow-200 hover:border-yellow-500 flex items-center gap-1 text-yellow-500'>
                    <IconPencil size={'20'} strokeWidth={'1.2'}/> {title}
                </Link>
            }
        </>
    )
}
