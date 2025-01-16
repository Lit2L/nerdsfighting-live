import Image from 'next/image'

function Logo() {
  return (
    <div className='w-72 py-0 md:py-6'>
      <Image
        src='/_static/logo-1.png'
        alt='Nerds Kickboxing Club'
        width={400}
        height={340}
        priority
        className='scale-75 rounded-full drop-shadow-2xl md:scale-100'
      />
    </div>
  )
}

export default Logo
