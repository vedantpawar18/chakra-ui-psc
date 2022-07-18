import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomaPage from './HomaPage'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<HomaPage/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes