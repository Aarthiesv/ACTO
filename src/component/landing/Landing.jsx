import React from 'react'
import { useLocation } from 'react-router-dom'

const Landing = () => {
    const data = useLocation()
    const a= data?.state?.input

    return (
        <p>{a}</p>
  )
}

export default Landing
