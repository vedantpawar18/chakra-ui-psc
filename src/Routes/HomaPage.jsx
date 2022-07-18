import React from 'react'
import { JobSection } from '../Components/JobSection'
import Navbar from '../Components/Navbar'
import SearchSection from '../Components/SearchSection'

const HomaPage = () => {
  return (
    <div>
        <Navbar />
        <SearchSection/>
        <JobSection/>
    </div>
  )
}

export default HomaPage