import {AiFillInstagram ,AiOutlineGithub ,AiOutlineLinkedin} from 'react-icons/ai'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='footer-container'>
        <p> 2023 EP Headphones All Rights Reserved</p>
        <p className='icons'>
          <Link href ='https://www.instagram.com/vishu.livincool/'>
        <AiFillInstagram/>
          </Link>
          <Link href ='https://github.com/vishusharmaX'>
        <AiOutlineGithub/>
          </Link>
          <Link href ='https://www.linkedin.com/in/vishwajeet-sharma-649a21205/'>
        <AiOutlineLinkedin/>
          </Link>
        </p>
    </div>
  )
}

export default Footer
