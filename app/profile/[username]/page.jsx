import { BASE_URL } from '@/app/services/config'
import ProfileButtons from './ProfileButtons'

const getUserInfo = async (username) => {
  const res = await fetch(`${BASE_URL}/api/user/${username}`)
  const data = await res.json()
  return data
}

const Profile = async ({ params }) => {
  const { username } = params
  const userData = await getUserInfo(username)

  return (
    <section className='c-container mt-28'>
      {/* Profile section */}
      <div className='flex gap-3 lg:gap-10'>
        <img
          src={userData.image}
          alt={userData.name}
          width={140}
          height={140}
          className='self-start rounded-full w-10 h-auto md:w-20 lg:w-36'
        />
        <div className='flex flex-col gap-2 lg:gap-6 md:mt-5 lg:mt-8'>
          <h1 className='text-black font-bold text-xl md:text-3xl lg:text-[40px]'>
            {userData.fullname}
          </h1>
          <p className='text-text_gray font-semibold leading-[150%] text-sm md:text-lg lg:text-2xl'>
            {userData.position}, {userData.bio}
          </p>
          <ProfileButtons user={userData} />
        </div>
      </div>
    </section>
  )
}

export default Profile
