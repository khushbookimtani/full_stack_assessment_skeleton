import React from 'react'
import { Card } from './Card'
import Skeleton from 'react-loading-skeleton'

export const CardList = ({ toggleModalShow, homes, isLoading }) => {
    if (isLoading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {/* Render skeletons while loading */}
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            <Skeleton />
                        </h5>
                        <ul className="text-sm font-medium text-gray-900 py-2">
                            <li className="w-full py-1"><Skeleton /></li>
                            <li className="w-full py-1"><Skeleton /></li>
                            <li className="w-full py-1"><Skeleton /></li>
                            <li className="w-full py-1"><Skeleton /></li>
                            <li className="w-full py-1"><Skeleton /></li>
                            <li className="w-full py-1"><Skeleton /></li>
                        </ul>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {homes.map(home => (
                <Card key={home.id} data={home} toggleModalShow={toggleModalShow} />
            ))}
        </div>
    )
}
