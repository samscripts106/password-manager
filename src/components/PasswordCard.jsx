import React from 'react'

const PasswordCard = ({
    item,
    index,
    handleEdit,
    handleDelete
}) => {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        <div className='flex items-center justify-between mb-4'>
            <h3 className='text-lg font-semibold text-white'>
                {item.website}
            </h3>
            <div className='flex gap-3'>
                <button onClick={()=>handleEdit(index)} className='text-purple-400 hover:font-bold'>Edit</button>
                <button onClick={()=>handleDelete(index)} className='text-red-400 hover:font-bold'>Delete</button>
            </div>
        </div>

        <div className='flex flex-col gap-2 text-gray-400'>
            <p>Username: {item.username}</p>
            <p>Password: {"•".repeat(item.password.length)}</p>
        </div>
    </div>
  )
}

export default PasswordCard
