import React from 'react'

export const Button = ({
    type='button',
    buttonStyle = 'primary',
    children,
    onClick
}) => {
  return (
    <button className={`inline-flex items-center px-3 py-2 mx-1 text-sm font-medium text-center rounded-lg  text-white ${buttonStyle == 'primary' ? 'bg-blue-500' : 'bg-gray-400'}`} type={type} onClick={() => onClick()}>
        { children }
    </button>
  )
}
