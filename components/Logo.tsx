import Image from 'next/image'

function Logo() {
  return (
    <div className='mx-auto w-56 md:w-96'>
      <Image
        src='/logoNF.png'
        alt='Nerds Kickboxing Club'
        width={400}
        height={400}
        priority
        className='rounded-full shadow-2xl shadow-[#121212]/70'
      />
    </div>
  )
}

export default Logo
