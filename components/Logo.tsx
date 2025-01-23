import Image from 'next/image'

function Logo() {
  return (
    <Image
      src='/nerd-logo.png'
      alt='Nerds Kickboxing Club'
      width={384}
      height={384}
      priority
      className='h-72 w-96 drop-shadow-xl'
    />
  )
}

export default Logo
