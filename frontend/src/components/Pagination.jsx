import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from './Button'
import { decrementPage, incrementPage } from '../store/homeSlice'

export const Pagination = () => {
    const homes = useSelector(state => state.homes)
    const dispatch = useDispatch();

    const startEntryNo = (homes.nextPage -1 ) * 50 + 1
    const endEntryNo = startEntryNo + homes.data.length - 1

    const getPreviousButton = () => {
        if((homes.nextPage) <= 1) {
            return <Button attributes={{disabled:false}} classes={"cursor-not-allowed bg-blue-400"} onClick={() => dispatch(decrementPage())}>Prev</Button>
        }else {
            return <Button onClick={() => dispatch(decrementPage())}>Prev</Button>
        }
    }

    const getNextButton = () => {
        if(homes.nextPage >= homes.totalPages)  {
            return <Button attributes={{disabled:false}} classes={"cursor-not-allowed bg-blue-400"} onClick={() => dispatch(incrementPage())}>Next</Button>
        }else {
            return <Button onClick={() => dispatch(incrementPage())}>Next</Button>
        }
    }
    return (
        <>
            <div className="flex flex-col items-center pb-10">
                <span className="text-sm text-gray-700 dark:text-gray-400">
                    Showing <span className="font-semibold text-gray-900 dark:text-white">{startEntryNo}</span> to <span className="font-semibold text-gray-900 dark:text-white">{endEntryNo}</span> of <span className="font-semibold text-gray-900 dark:text-white">{homes.totalCount}</span> Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0 gap-1">
                    {getPreviousButton()}
                    {getNextButton()}
                </div>
            </div>
        </>
    )
}
