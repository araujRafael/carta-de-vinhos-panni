import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  icon?: React.ReactNode
}

export default function Button({ title, icon, className, ...rest }: ButtonProps) {
  return (
    <button
      className={` w-full
        rounded-md shadow-md
        bg-primary-900 active:scale-95
        px-5 py-2 ${className}
      `}
      {...rest}
    >
      {title || icon}
    </button>
  )
}
