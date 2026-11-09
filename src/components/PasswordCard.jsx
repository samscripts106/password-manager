import React from 'react'
import { useState } from 'react'

const PasswordCard = ({
    item,
    index,
    handleEdit,
    handleDelete
}) => {
    const [showPassword, setShowPassword] = useState(false);
    
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
            <div className='flex items-center gap-2'>
                <p>
                    Password: {showPassword? item.password:"•".repeat(item.password.length)}
                </p>

                <button type='button' onClick={()=> setShowPassword(!showPassword)}>
                    <img src={showPassword? "/icons/eye-open.svg":"/icons/eye-closed.svg"} alt="Toggle password visibility" className='w-5 h-5 invert'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default PasswordCard
