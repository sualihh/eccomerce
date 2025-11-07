import React from 'react'
import Hero from '../componet/Hero'
import LatestCollection from '../componet/LatestCollection'
import BestSeller from '../componet/BestSeller'
import OurPolicy from '../componet/OurPolicy'
import NewsLetterBox from '../componet/NewsLetterBox'

function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  )
}

export default Home
