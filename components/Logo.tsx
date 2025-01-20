import Image from 'next/image'

function Logo() {
  return (
    <div className=''>
      <Image
        src='/nerd-logo.png'
        alt='Nerds Kickboxing Club'
        width={400}
        height={400}
        priority
        className='drop-shadow-xl'
      />
    </div>
  )
}

export default Logo
