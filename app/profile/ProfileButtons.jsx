'use client'

import FormModal from '@/components/FormModal'

const ProfileButtons = () => {
  return (
    <div className='flex gap-2 items-stretch justify-start'>
      <button className='btn_profile'>Edit</button>
      <button className='btn_profile'>Create new blog</button>
      <FormModal />
    </div>
  )
}

export default ProfileButtons
