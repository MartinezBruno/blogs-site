import axios from 'axios'

import AboutUs from '@/components/Home/AboutUs'
import Hero from '@/components/Home/Hero'
import RateUs from '@/components/Home/RateUs'

if (process.env.NODE_ENV !== 'production') axios.defaults.baseURL = `${process.env.BASE_URL}/api`
else axios.defaults.baseURL = `${process.env.BASE_URL}/api`

export default function Home () {
  return (
    <main>
      <Hero />
      <AboutUs />
      <RateUs />
    </main>
  )
}
