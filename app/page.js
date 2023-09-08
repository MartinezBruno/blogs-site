import { BASE_URL } from '@/app/services/config'
import axios from 'axios'

import Hero from '@/components/Home/Hero'

import AboutUs from '@/components/Home/AboutUs'
import RateUs from '@/components/Home/RateUs'

if (process.env.NODE_ENV !== 'production') axios.defaults.baseURL = `${BASE_URL}/api`
else axios.defaults.baseURL = 'http://localhost:3000/api'

export default function Home () {
  return (
    <main>
      <Hero />
      <AboutUs />
      <RateUs />
    </main>
  )
}
