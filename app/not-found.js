import Image from 'next/image'

const PageNotFound = () => {
  return (
    <div className='grid place-items-center gap-6 py-40 max-w-[374px] mx-auto'>
      <h1 className='heading1 text-yellow'>Error 404...</h1>
      <p className='text-black text-xl leading-[163%]'>
        Do you want to join us or write blogs? Well... this is not the way :/
      </p>
      <Image
        src='https://firebasestorage.googleapis.com/v0/b/instablogs-2ea40.appspot.com/o/bob%201.png?alt=media&token=5cea547a-2949-47c8-968e-4eaf63f67196'
        width={374}
        height={367}
        alt='404'
      />
    </div>
  )
}

export default PageNotFound
