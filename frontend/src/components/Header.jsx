import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from '../store/userSlice'
import { useGetAllUsersQuery } from '../services/userApi'
import { SelectUser } from './SelectUser'

export const Header = () => {
    
    const { data, error, isLoading } = useGetAllUsersQuery('') 
    
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setUsers({data}));
    }, [data]);

     return (
        <nav className="relative bg-white border-gray-200">
            <SelectUser users={users.value.data}/>
        </nav>
  )
}
