import { BASE_URL } from '@/app/services/config'
import ProfileBlogsGrid from './ProfileBlogsGrid'

const getUserBlogs = async (username) => {
  const res = await fetch(`${BASE_URL}/api/posts/user/${username}`, {
    next: { revalidate: 300 }
  })
  const data = await res.json()
  return data
}

const ProfileBlogs = async ({ username }) => {
  const userBlogs = await getUserBlogs(username)
  return (
    <div className='mt-3 md:mt-10'>
      <h3 className='font-bold text-xl md:text-3xl lg:text-[40px] mb-3'>Posts</h3>
      <ProfileBlogsGrid blogs={userBlogs} />
    </div>
  )
}

export default ProfileBlogs
