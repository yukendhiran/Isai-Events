import Link from 'next/link';
import { FaFacebook, FaInstagram,FaTwitter,FaYoutube, FaTelegram } from 'react-icons/fa';

export default function Foot() {
  return (
    <div className='bg-gray-900 text-sm'>
      
      <div className='flex justify-between mx-20'>
        <div className='text-gray-400 text-lg p-3'>2023, Isai Events India Private Limited All rights reserved.</div>
        <div className='flex items-center space-x-4 text-gray-400 text-lg'>
          <Link href='https://instagram.com/isai_events_?igshid=MzRlODBiNWFlZA==' target="_blank" rel="noopener noreferrer">
            
              <FaInstagram />
            
          </Link>
          <Link href='https://t.me/maduraikulungaakulungaa' target="_blank" rel="noopener noreferrer">
           
              <FaTelegram />
           
          </Link>
          <Link href='https://www.facebook.com/profile.php?id=61550361510849' target="_blank" rel="noopener noreferrer">
           
              <FaFacebook />
            
          </Link>
		  <Link href='' target="_blank" rel="noopener noreferrer">
           
              <FaTwitter />
            
          </Link>
		  <Link href='https://youtube.com/@Isai_Events_?si=1WqaGPIcCROSf-up' target="_blank" rel="noopener noreferrer">
           
              <FaYoutube />
            
          </Link>
        </div>
      </div>
    </div>
  );
}
