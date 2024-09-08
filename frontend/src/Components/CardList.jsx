import React from 'react'
import { Card } from './Card'

export const CardList = ({ toggleModalShow, homes}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {
                homes.map(home => {
                    return <Card key={home.id} data={home} toggleModalShow={toggleModalShow} />
                })
            }
        </div>

    )
}
