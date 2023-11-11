import { Link } from '@inertiajs/react'
import React from 'react'

export default function Button({className, icon, label, type, href, added}) {
  return (
    <>
        {type == 'link' ?
            <Link href={href} className={`${className} px-4 py-2 flex items-center gap-1 rounded-lg text-sm font-semibold hover:scale-105 duration-300`}>
             {icon} <span className={`${added === true ? 'hidden lg:block' : '' }`}>{label}</span>
            </Link>
            :
            <button className={`${className} px-4 py-2 flex items-center gap-1 rounded-lg text-sm font-semibold hover:scale-105 duration-300`}>
                {icon} <span className={`${added === true ? 'hidden lg:block' : '' }`}>{label}</span>
            </button>
        }
    </>
  )
}
