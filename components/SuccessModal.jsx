import Link from 'next/link'
import Check from './Icons/Check'

const SuccessModal = ({ showModal, closeModal, blogId }) => {
  return (
    <div id="popup-modal" className={`fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${showModal ? 'grid place-content-center' : 'hidden'} bg-transparent/25`}>
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <button onClick={closeModal} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <Check />
            <h3 className="mb-2 text-lg font-normal text-gray-500">Congrats! You post was successfully created!</h3>
            <p className="text-lg font-normal text-gray-500 mb-5">You can <Link href={`/blogs/${blogId}`} className='text-gray-700 hover:text-gray-950'>click here</Link> to see it</p>
            <span className='text-xs text-gray-700'>Otherwise you can close this pop-up</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal
