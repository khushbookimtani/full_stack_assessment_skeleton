import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { useGetUsersByHomeQuery } from '../services/userApi';
import { useUpdateUsersMutation } from '../services/homeApi';
import { setSelectedUser } from '../store/userSlice';

export const Modal = ({ showModal, setShowModal, selectedHome, setSelectedHome, refetch}) => {
    const { data, error, isLoading } = useGetUsersByHomeQuery(selectedHome);

    const [change, setChange] = useState(false);

    const users = useSelector(state => state.users);
    const [updateUsers] = useUpdateUsersMutation();
    const [checkedUsers, setCheckedUsers] = useState([]);

    useEffect(() => {
        if (data) {
            const checkedUserIds = data.map(user => user.id);
            setCheckedUsers(checkedUserIds);
        }
    }, [data]);

    const handleCheckboxChange = (userId) => {
        if (!change) {
            setChange(true);
        }

        setCheckedUsers((checkedUsers) => {
            if (checkedUsers.includes(userId) && checkedUsers.length === 1) {
                alert("Minimum 1 checkbox must be checked");
                return checkedUsers;
            }

            return checkedUsers.includes(userId)
                ? checkedUsers.filter(id => id !== userId)
                : [...checkedUsers, userId];
        });
    };

    const handleUpdateUsers = async () => {
        setShowModal(!showModal);
        if (change) {
            try {
                await updateUsers({ homeId: selectedHome, userIds: checkedUsers }).unwrap();
                alert('Update successful');
                setChange(false);
                setCheckedUsers([]);
                setSelectedHome('');
                refetch();
                
            } catch (err) {
                alert('Failed to update users');
            }
        } else {
            alert('No need to update, since there are no changes');
        }
    };

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"></div>
            )}
            <div
                id="static-modal"
                data-modal-backdrop="static"
                tabIndex="-1"
                className={`${showModal ? 'flex' : 'hidden'} fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full`}
            >
                <div className="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Modify Users
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => {
                                setShowModal(!showModal);
                                setSelectedUser('');
                            }}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                        <ul className="w-48 text-sm font-medium text-gray-900 bg-white">
                            {users && users.value.data.map(user => (
                                <li key={user.id} className="w-full">
                                    <div className="flex items-center ps-3">
                                          <input
                                            id={`checkbox-${user.id}`}
                                            type="checkbox"
                                            value={user.id}
                                            checked={checkedUsers.includes(user.id)}
                                            onChange={() => handleCheckboxChange(user.id)}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                        />
                                        <label htmlFor={`checkbox-${user.id}`} className="w-full py-1 ms-2 text-sm font-medium text-gray-900">
                                            {user.username}
                                        </label>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <Button type="button" buttonStyle="secondary" onClick={() => {
                            setShowModal(!showModal);
                            setSelectedUser('');
                        }}>Cancel</Button>
                        <Button type="button" buttonStyle="primary" onClick={handleUpdateUsers} disabled={isLoading}>Save</Button>
                    </div>
                </div>
            </div>
        </>
    );
};
