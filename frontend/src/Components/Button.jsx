import React from 'react'

export const Button = ({
    type='button',
    buttonStyle = 'primary',
    children,
    onClick,
    attributes=null,
    classes=''
}) => {
  return (
    <button {...attributes} className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg  text-white ${buttonStyle == 'primary' ? 'bg-blue-500' : 'bg-gray-400'} ${classes}`} type={type} onClick={() => onClick()}
    >
        { children }
    </button>
  )
}
