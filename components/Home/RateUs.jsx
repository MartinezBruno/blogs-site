import { BASE_URL } from '@/app/services/config'
import RateUsSlides from './RateUsSlides'

const getReviews = async () => {
  const res = await fetch(`${BASE_URL}/api/rateus`, {
    next: { revalidate: 3600 }
    // cache: 'no-cache'
  })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Error fetching reviews')
  }
  const data = await res.json()
  return data
}

const RateUs = async () => {
  const data = await getReviews()
  return (
    <section className='mt-[124px]'>
      <h4 className='heading2 text-black text-center mb-4'>Opinions about us</h4>
      <RateUsSlides reviews={data} />
    </section>
  )
}

export default RateUs
