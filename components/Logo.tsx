import Image from 'next/image'

function Logo() {
  return (
    <div className='mx-auto w-56 md:w-96'>
      <Image
        src='/_static/logoNF.png'
        alt='Nerds Kickboxing Club'
        width={400}
        height={400}
        priority
        className='shadow-[#121212]10 rounded-full shadow-2xl dark:shadow-[#121212]/70'
      />
    </div>
  )
}

export default Logo
