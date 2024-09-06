import React, { useState } from 'react'
import { Button } from './Button'
import { Modal } from './Modal'

export const Card = ({data}) => {
    const [showModal,setShowModal] = useState(false)
    
    const toggleModalShow = () => {
        setShowModal(!showModal)
    }
    return (
    <>
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data.address}</h5>
            <ul class="text-sm font-medium text-gray-900 py-2">
                <li className="w-full py-1">List Price:  </li>
                <li className="w-full py-1">State: </li>
                <li className="w-full py-1">Zip: </li>
                <li className="w-full py-1">Sqft: </li>
                <li className="w-full py-1">Beds: </li>
                <li className="w-full py-1">Baths: </li>                
            </ul>   
        </a>
        <Button type='submit' buttonStyle='secondary' onClick={toggleModalShow}>Edit User</Button>
    </div>
    <Modal showModal={showModal} setShowModal={setShowModal}/>
    </>
  )
}
