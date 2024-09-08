import React, { useState } from 'react'
import { Button } from './Button'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const Card = ({data, toggleModalShow}) => {
    return (
    <>
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <div >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data.streetAddress || <Skeleton />}</h5>
            <ul className="text-sm font-medium text-gray-900 py-2">
                <li className="w-full py-1">List Price: {data.listPrice} </li>
                <li className="w-full py-1">State: {data.state} </li>
                <li className="w-full py-1">Zip: {data.zip}</li>
                <li className="w-full py-1">Sqft: {data.sqft} </li>
                <li className="w-full py-1">Beds: {data.beds} </li>
                <li className="w-full py-1">Baths:  {data.baths}</li>                
            </ul>   
        </div>
        <Button type='submit' buttonStyle='primary' onClick={() => toggleModalShow(data.id)}>Edit User</Button>
    </div>
    </>
  )
}
