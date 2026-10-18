import react from 'react'

const Usercard = ({ user, deleteUser, setToggle, setUpdatedData }) => {
    // console.log(user)
    return (
        <div className='flex flex-col p-4 bg-gray-500  rounded-lg'>
            <div className='w-50 h-40 rounded-md overflow-hidden'>
                <img className='w-full h-full object-cover' src={user.imageUrl} alt="" />
            </div>
            <p className='text-lg font-medium text-white'>{user.name}</p>
            <p className='text-lg font-medium text-white'>Role</p>
            <div className='flex justify-between mt-4'>
                <button onClick={() => { setToggle((prev) => !prev); setUpdatedData(user); }} className='cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded'>Update</button>
                <button onClick={() => deleteUser(user.id)} className='cursor-pointer bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded'>Delete</button>
            </div>
        </div>

    )
}

export default Usercard;