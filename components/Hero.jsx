import hero_img from '@/assets/Banner.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative min-h-[687px]'>
      <div className='-mt-16 bg-[rgba(11,8,2,0.33)] absolute inset-0'>
        <Image
          src={hero_img}
          alt='Hero image'
          width={1920}
          height={1080}
          className='object-cover object-[top_center] w-full h-full relative -z-20'
        />
      </div>
      <div className='c-container relative'>
        <div className='flex flex-col gap-8'>
          <h1 className='heading1 text-center text-white'>
            Instant collaboration for remote teams
          </h1>
          <p className='paragraph text-white text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <form>
            <input
              type='email'
              placeholder='Email'
            />
            <button type='submit'>Get early access</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Hero
