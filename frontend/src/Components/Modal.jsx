import React from 'react'
import { Button } from './Button'

export const Modal = ({
    showModal,
    setShowModal,
}) => {
  return (
    <div id="default-modal" tabindex="-1" className={`${showModal ? 'flex': 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
        <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                       Modify Users
                    </h3>
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={() => setShowModal(!showModal)}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="p-4 md:p-5 space-y-4">
                    <ul className="w-48 text-sm font-medium text-gray-900 bg-white ">
                        <li className="w-full">
                            <div className="flex items-center ps-3">
                                <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                                <label for="vue-checkbox" className="w-full py-1 ms-2 text-sm font-medium text-gray-900 ">user1</label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <Button type='button' buttonStyle='secondary' onClick={() => setShowModal(!showModal)}>Cancel</Button>
                    <Button type='submit' buttonStyle='primary'>Save</Button>
                </div>
            </div>
        </div>
    </div>
  )
}
