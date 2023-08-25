import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link  from 'next/link'


export default function Foot(){
	return(
		<div className='bg-gray-900 sm:text-sm'>
			
			 <hr className=" border-t-2 p-2 border-gray-400 w-5/6 mx-auto my-auto "/>	
			 <div className='flex mx-20'>
				<div className='text-gray-400 text-2xl p-3'>2023, Isai Events India Private Limited  All rights reserved.</div>	
				<div className='ml-auto flex sm:flex-col justify-center items-center sm:space-y-2 lg:flex-row  sm:text-lg lg:space-x-4  text-gray-400 lg:text-2xl'>
					 
					 <Link href='https://instagram.com/isai_events_?igshid=MzRlODBiNWFlZA==' target="_blank" rel="noopener noreferrer">
      					<FaInstagram />
    				</Link>
					<Link className='mb-10' href='https://www.facebook.com/profile.php?id=61550361510849' target="_blank" rel="noopener noreferrer">
					<FaFacebook  />
    				</Link>
      						
				</div>		 
			 </div>	
			
		</div>
	)

}