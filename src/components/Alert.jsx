import React from 'react'

const Alert = ({ color, message }) => {

  const colorVariants = {
    
    blue: 'rounded border-s-4 border-blue-500 bg-blue-50 p-4',
    green: 'rounded border-s-4 border-green-500 bg-green-50 p-4',
    red: 'rounded border-s-4 border-red-500 bg-red-50 p-4',
  }
  const titleVariants = {
    blue: 'block font-medium text-blue-800',
    green: 'block font-medium text-green-800',
    red: 'block font-medium text-red-800',
  }

  const textVariants = {
    blue: 'mt-2 text-sm text-blue-700',
    green: 'mt-2 text-sm text-green-700',
    red: 'mt-2 text-sm text-red-700',
  }

  const titles ={
    blue:'🚉 INFORMATION',
    green: '✅ SUCCESS',
    red: '🚩ERROR'
  }
  return (
    <div role='alert' className={`${colorVariants[color]}`}>
      <strong className={`${titleVariants[color]}`}> {`${titles[color]}`} </strong>

      <p className={`${textVariants[color]}`}>
        {message}
      </p>
    </div>
  )
}

export default Alert;