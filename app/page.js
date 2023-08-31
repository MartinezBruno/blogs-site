import axios from 'axios'
import { lazy } from 'react'
import { BASE_URL } from '@/app/services/config'

import Hero from '@/components/Home/Hero'

const AboutUs = lazy(() => import('@/components/Home/AboutUs'))
const RateUs = lazy(() => import('@/components/Home/RateUs'))

if (process.env.NODE_ENV !== 'production') axios.defaults.baseURL = `${BASE_URL}/api`
else axios.defaults.baseURL = `${BASE_URL}/api`

export default function Home () {
  return (
    <main>
      <Hero />
      <AboutUs />
      <RateUs />
    </main>
  )
}
