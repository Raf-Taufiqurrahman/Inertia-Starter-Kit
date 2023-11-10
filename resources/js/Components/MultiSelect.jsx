import React from 'react'
import Select from 'react-select';

export default function MultiSelect({label, errors, ...props}) {
    return (
        <div className='flex flex-col gap-2'>
            <label className='text-gray-600 text-sm'>{label}</label>
            <Select
                isMulti
                {...props}
                classNames={{
                    control: (state) =>
                        state.isFocused ? 'bg-rose-500' : 'bg-yellow-500',
                }}
            />
            {errors && (
                <small className='text-xs text-red-500'>{errors}</small>
            )}
        </div>
    )
}
