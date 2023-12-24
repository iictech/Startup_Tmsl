import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ name }) => {
  return (
    <Link to={`/${name.toLowerCase()}`}>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none">{name}</button></Link>
  )
}

export default Button