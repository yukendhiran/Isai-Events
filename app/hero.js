import Image from 'next/image'
import Link from 'next/link'
import Plans from './plans'
export default function Hero () {
	return(
	<div clas>
		<div className='bg-white  overfolw:scroll lg:flex'>
				<div className='p-7 lg:w-1/2'>
					<div className='flex flex-row'>
					<div className='text-6xl font-twcent '>ISAI EVENTS INDIA PRIVATE LIMITED</div>
					
					</div>
					
					<div className='text-2xl text-black font-bold mt-4 ' >					
						{/*with &nbsp;*/}
						{/*<span className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'> </span>*/}
						<div className='text-2xl font-bold font-twcent pl-1 mt-5'>
						Exciting Opportunity: Sponsorship for  <span className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'>
						Madurai Kulungaa Kulungaa&nbsp;
						</span>  <br/>
							{/*<span className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'>you</span> */}
						</div>	
					 </div>
	
					<div className='text-2xl  font-twcent text-black mt-5'  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are thrilled to present an incredible sponsorship opportunity for Madurai Kulungaa Kulungaa - Music concert , a highly anticipated musical extravaganza that is set to captivate audiences and create lasting memories. We believe that your brand&apos;s values align perfectly with our event, and we are excited to invite you to join us as a sponsor. </div>	
				   		
				</div>
				<Image
    					className='mx-auto my-auto'
   						src='/popster.jpg'
    					alt="poster"
    					width={500}
    					height={500}
					/> 	
				
			</div>

			<div className='bg-img bg-cover flex justify-center space-x-10'>
  <div className='mx-auto my-auto'>
    <Image
      src='/logo1.png'
      alt="Isai"
      width={400}
      height={400}
    />
  </div>
  
  <div className='mx-auto my-auto'>
    <Image
      src='/madurai1.png'
      alt="Madurai"
      width={400}
      height={400}
    />
  </div>
  
  <div className='mx-auto my-auto'>
    <Image
      src='/date1.png'
      alt="Date"
      width={400}
      height={400}
    />
  </div>
</div>

			<div className='flex flex-row  flex-row  space-x-5 mb-5'>
				<Link href="https://instagram.com/samvishal0928?igshid=MzRlODBiNWFlZA==">
      				<Image
        				className='mx-auto rounded-full my-auto mt-10'
         				src='/sam1.jpg'
        				alt="Sam Vishal"
          				width={200}
          				height={200}
        			/>
      			</Link>

				  <Link href="https://instagram.com/srinisha_jayaseelan?igshid=MzRlODBiNWFlZA==">
      				<Image
        				className='mx-auto rounded-full my-auto mt-10'
         				src='/sri.jpg'
        				alt="shresha"
          				width={200}
          				height={200}
        			/>
      			</Link>
				  <Link href="https://instagram.com/sakthiamaranlive?igshid=MzRlODBiNWFlZA==">
      				<Image
        				className='mx-auto rounded-full my-auto mt-10'
         				src='/sakthi.jpg'
        				alt="shakthi"
          				width={200}
          				height={200}
        			/>
      			</Link>
				  <Link href="https://instagram.com/vishnupriya_ravi?igshid=MzRlODBiNWFlZA==">
      				<Image
        				className='mx-auto rounded-full my-auto mt-10'
         				src='/vishnu.jpg'
        				alt="vishnupriya"
          				width={200}
          				height={200}
        			/>
      			</Link>
				  <Link href="https://instagram.com/mathichiyambala?igshid=MzRlODBiNWFlZA==">
      				<Image
        				className='mx-auto rounded-full my-auto mt-10'
         				src='/mathi.jpg'
        				alt="mathi"
          				width={200}
          				height={200}
        			/>
      			</Link>
				  <Link href="https://instagram.com/reshmashyam?igshid=MzRlODBiNWFlZA==">
      				<Image
        				className='mx-auto rounded-full my-auto mt-10'
         				src='/reshma.jpg'
        				alt="GymGenie"
          				width={200}
          				height={200}
        			/>
      			</Link>

			</div>

			<Image
    					className='mx-auto  my-auto '
   						src='/isaiLogo.svg'
    					alt="Isai Logo"
    					width={200}
    					height={200}
					/>

			<div className=' h-5 w-10/12 mx-auto sm:mt-50 lg:mt-10'>
				<div className='flex sm:flex-col lg:flex-row space-x-10 '>
				
					

			

					<div className='text-2xl font-twcent font-bold text-white bg-gray-900 backdrop-blur-lg backdrop-opacity-50 rounded-lg p-6'> Event Name: Madurai Kulungaa Kulungaa - Music Concert &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
Date: September 23 2023 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
Artists : Sam Vishal, Sakthi Amaran, Vishnupriya Ravi, Srinisha Jayaseelan, Mathichiyam Bala, Reshma Shyam&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
Venue: Tamukkam Ground, Madurai</div>		
					</div>
				
			

			</div>
			
			<div id="about" className='flex font-twcent mt-200 flex-col sm:mt-200 lg:mt-56 text-gray-900 '>
					<div className='sm:text-lg  lg:text-4xl font-bold mx-auto  sm:mt-10 lg:mt-30 '>    <Image
      src='/Madurai2b.png'
      alt="Madurai"
      width={800}
      height={800}
    />
</div>
					{/*<div className='text-lg mt-5 font-bold mx-auto text-gray-500' >GymGenie has helped people in USA, India, Canada, UAE, and 80 more countries </div>*/}			
			</div>
			
		<div className='flex lg:flex-row sm:flex-col font-twcent  justify-center items-center  mb-7 space-x-1 mt-10'>
			<div className='sm:w-full  lg:w-3/12 h-32  rounded border shadow-lg flex flex-col justify-center items-center'> <span className='font-bold  lg:text-4xl sm:text-2xl lg:mt-7 bg-gradient-to-r from-cyan-500 to-cyan-500 bg-clip-text text-transparent'>12000</span> <span className='text-gray-500  sm:text-sm text-lg mb-5 '> Foot Falls</span>	</div>
			<div className='sm:w-full lg:w-3/12 h-32  rounded border shadow-lg flex flex-col justify-center items-center'> <span className='font-bold sm:text-2xl lg:text-4xl lg:mt-7 bg-gradient-to-r from-cyan-500 to-cyan-500 bg-clip-text text-transparent'>5 Million</span> <span className='text-gray-500  sm:text-sm text-lg mb-5 '> Online Views</span>	</div>
			<div className='sm:w-full lg:w-3/12 h-32  rounded border shadow-lg flex flex-col justify-center items-center'> <span className='font-bold sm:text-2xl lg:text-4xl lg:mt-7 bg-gradient-to-r from-cyan-500 to-cyan-500 bg-clip-text text-transparent'>10 Million</span> <span className='text-gray-500  sm:text-sm  ext-lg mb-5 '> People Reach</span>	</div>		
		</div>
		
		<div id="workplan"><Plans /> </div>
		
		
	</div>	
	)

}