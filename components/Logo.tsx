import Image from 'next/image'

function Logo() {
  return (
    <Image
      src='/_static/logo-1.png'
      alt='Nerds Kickboxing Club'
      width={400}
      height={400}
      priority
      className='w-96 rounded-full opacity-90 drop-shadow-2xl'
    />
  )
}

export default Logo
