import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import ProfileButtons from './ProfileButtons'

const Profile = async () => {
  const { user } = await getServerSession(authOptions)
  return (
    <section className='c-container mt-28'>
      {/* Profile section */}
      <div className='flex gap-3 lg:gap-10'>
        <img
          src={user.image}
          alt={user.name}
          width={140}
          height={140}
          className='self-start rounded-full w-10 h-auto md:w-20 lg:w-36'
        />
        <div className='flex flex-col gap-2 lg:gap-6 md:mt-5 lg:mt-8'>
          <h1 className='text-black font-bold text-xl md:text-3xl lg:text-[40px]'>
            {user.name}
          </h1>
          <p className='text-text_gray font-semibold leading-[150%] text-sm md:text-lg lg:text-2xl'>
            {user.pos}, {user.bio}
          </p>
          <ProfileButtons />
        </div>
      </div>
    </section>
  )
}

export default Profile
