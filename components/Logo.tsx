import Image from 'next/image'

function Logo() {
  return (
    <div className='w-96 py-0 md:py-6'>
      <Image
        src='/_static/logo-1.png'
        alt='Nerds Kickboxing Club'
        width={400}
        height={380}
        priority
        className='scale-75 rounded-full md:scale-100'
      />
    </div>
  )
}

export default Logo
