import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reInitializePage } from '../store/homeSlice';
import { setSelectedUser } from '../store/userSlice';

export const SelectUser = ({ users }) => {
  const dispatch = useDispatch();
  const selectedUser = useSelector(state => state.users.selectedUser);


  const handleUserChange = async (event) => {
    const userId = event.target.value;
    if (userId) {
      dispatch(setSelectedUser(userId));
      dispatch(reInitializePage())
    }
  };

  return (
    <form className="max-w-sm mx-auto">
      <div className="flex items-center space-x-4">
        <label htmlFor="users" className="text-sm font-medium text-gray-900 dark:text-white">
          Select a User
        </label>
        <select
          id="users"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          value={selectedUser || ''}
          onChange={handleUserChange}
        >
          <option value="" disabled>
            Choose a User
          </option>
          {users &&
            users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.username}
              </option>
            ))}
        </select>
      </div>
    </form>
  );
};
