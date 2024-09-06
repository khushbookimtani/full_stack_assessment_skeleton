import React from 'react'
import { Card } from '../Components/Card'
import { Dropdown } from '../Components/Dropdown'
import { Header } from '../Components/Header'

const data = { "homeId": "home1", "address": "123 Elm Street", "city": "Springfield", "state": "IL", "zipCode": "62701", "price": "$250,000" }

export const Home = () => {
    return (
    <>
        <Header/>
        <Card data = {data}/>
    </>
  )
}
