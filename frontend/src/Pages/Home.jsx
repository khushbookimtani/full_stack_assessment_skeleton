import React, { useEffect, useState } from 'react'
import { Card } from '../Components/Card'
import { Header } from '../Components/Header'
import { Modal } from '../Components/Modal'
import { Pagination } from '../Components/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { CardList } from '../Components/CardList'
import { useGetAllHomesByUserQuery } from '../services/homeApi'
import { setHomes } from '../store/homeSlice'


export const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedHome, setSelectedHome] = useState('')
  
  const toggleModalShow = (homeId) => {
    setShowModal(!showModal)
    setSelectedHome(homeId)
  }

  const [didUpdate, setDidUpdate] = useState(false)
  const dispatch = useDispatch();
    const selectedUser = useSelector(state => state.users.selectedUser);
    const nextPage = useSelector(state => state.homes.nextPage)
    const homes = useSelector(state => state.homes)
    
    const { data,refetch } = useGetAllHomesByUserQuery({userId:selectedUser,page:nextPage})

    useEffect(() => {
     console.log("Home rendered")
        if(data){
          dispatch(setHomes(data));
          console.log("Homes", homes.data);
        }
    },[data])


  return (
    <>
      <Header />
      { selectedUser && <CardList homes={homes.data} toggleModalShow={toggleModalShow} didUpdate={didUpdate}/>}

      { selectedHome && <Modal showModal={showModal} setShowModal={setShowModal} selectedHome={selectedHome} setSelectedHome={setSelectedHome} refetch={refetch}/>
      }
      {
        selectedUser && <Pagination />
      }
    </>
  )
}
