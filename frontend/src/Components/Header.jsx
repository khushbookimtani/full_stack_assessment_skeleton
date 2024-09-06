import React, { useState } from 'react'
import { Dropdown } from './Dropdown'
import { Button } from './Button'

export const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false)

    const toggleDropdownShow = () => {
        setShowDropdown(!showDropdown)
    }
     return (
    <nav class="bg-white border-gray-200 flex justify-center">
        <div>
        <Button type="button" buttonStyle="primary" onClick={toggleDropdownShow}>Select Users <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>  </Button>
        <Dropdown showDropdown={showDropdown}/>
        </div>
    </nav>
  )
}
