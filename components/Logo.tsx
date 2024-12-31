import Image from 'next/image'

function Logo() {
  return (
    <Image
      src='/logoNF.png'
      alt='Nerds Kickboxing Club'
      width={300}
      height={300}
      priority
      className=''
    />
  )
}

export default Logo
