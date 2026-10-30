import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../config/axiosInstance';
import UserCard from '../components/UserCard';

const UsersPage = () => {
    let [usersData, setUsersData] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    let getUsersData = async () => {
        try {
            let response = await axiosInstance.get('/users');
            setUsersData(response.data)
            setIsLoading(false)

        }
        catch (error) {

        }
    }

    useEffect(() => {
        getUsersData()
    }, [])
    if (isLoading) return <h4> Loading users....</h4>
    return (
        <div className='grid grid-cols-4 gap-4'>
            {
                usersData.map((user) => {
                    return <UserCard key={user.id} user={user} />
                })
            }
        </div>
    )
}
export default UsersPage;