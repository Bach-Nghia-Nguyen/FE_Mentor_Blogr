import Image from 'next/image'
import icon from 'assets/images/icon-arrow-light.svg'

export default function LightArrow({ isOpen }) {
  const customStyle = {
    ...(isOpen && { transform: 'rotate(180deg)' }),
    transition: 'all 0.1s ease-in-out',
  }
  return <Image src={icon} alt="light arrow icon" width="10px" height="7px" style={customStyle} />
}
