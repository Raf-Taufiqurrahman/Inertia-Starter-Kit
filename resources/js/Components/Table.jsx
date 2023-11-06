import React  from 'react'

const Card = ({icon, title, className, children}) => {
    return (
        <>
            <div className={`py-3 px-4 bg-white rounded-t-lg border border-b-0 ${className}`}>
                <div className='flex items-center gap-2 uppercase font-semibold text-sm'>
                    {icon} {title}
                </div>
            </div>
            <div className='bg-white rounded-b-lg'>
                {children}
            </div>
        </>

    )
}

const Table = ({ children, className }) => {
    return (
        <div className={`${className} flex flex-col border-t-0 border rounded-b-lg overflow-hidden`}>
            <div className="overflow-x-auto scrollbar-hide">
                <div className="inline-block w-full align-middle">
                    <table className="w-full">
                        {children}
                    </table>
                </div>
            </div>
        </div>
    );
};

const Thead = ({ className, children }) => {
    return (
        <thead className={className}>{children}</thead>
    );
};

const Tbody = ({ className, children }) => {
    return (
        <tbody className={`${className} divide-y divide bg-white rounded-b-lg`}>
            {children}
        </tbody>
    );
};

const Td = ({ className, children}) => {
    return (
        <td
            className={`${className} whitespace-nowrap px-6 py-2 text-gray-700 rounded-b-lg text-sm`}
        >
            {children}
        </td>
    );
};

const Th = ({ className, children }) => {
    return (
        <th
            scope="col"
            className={`${className} whitespace-nowrap px-6 py-2 text-left text-sm font-semibold text-gray-700 bg-gray-100 border-t border-b`}
        >
            {children}
        </th>
    );
};

const Empty = ({colSpan, message, children}) => {
    return (
        <tr>
            <td colSpan={colSpan}>
                <div className="flex items-center justify-center h-96">
                    <div className="text-center">
                        {children}
                        <div className="mt-5">
                            {message}
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    )
}

Table.Card = Card;
Table.Thead = Thead;
Table.Tbody = Tbody;
Table.Td = Td;
Table.Th = Th;
Table.Empty = Empty;

export default Table;
