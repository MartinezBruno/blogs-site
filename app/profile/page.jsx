import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'

const Profile = async () => {
  const session = await getServerSession(authOptions)
  return <pre className='mt-7'>{JSON.stringify(session, null, 2)}</pre>
}

export default Profile
