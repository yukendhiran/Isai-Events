import Card from './card'


export default function Plans() {
	return(
		<div className = 'bg-black bg-cover flex lg:flex-col sm:flex-col sm:justify-center sm:items-center sm:space-y-2  lg:space-y-4'>
				<div className='mt-10 mb-10 space-y-10'>
				<Card 
					image='/genie.svg'
					imageName='Free Plan'	
					title='SPONSORSHIP '
					details='Telecasting LIVE ADVERTISEMENTS 
					[Huge LED Screens]
					
					- Promoting & Advertising All Over MADURAI 
					[FLEX & POSTERS]
					
					- LOGO Sealed Tickets 
					[Live Tickets]
					
					- BROUCHURE Distribution Inside the VENUE 
					[BROUCHURES]
					
					- DIGITAL MARKETING More Than 25 LAKH Viewers
					
					- CONCERT Live 4 HOURS [45 MINS ] AD STREAMING
					
					- 10×10 FLEX Inside the Venue'
					rate='Rate: ₹5,99,999'		
				/> 
				
				<Card 
					image='/genie.svg'
					imageName='genie'	
					title='POWERED BY'
					details='Telecasting Live Advertisements 
					[HUGE LED SCREEN]
					
					- Promoting & Advertising All Over MADURAI 
					[ FLEX & POSTERS ]
					
					- Logo Sealed Tickets 
					[LIVE TICKETS ]
					
					- DIGITAL MARKETING More Than 25LAKH Viewers 
					
					- CONCERT Live 4Hours [25 Mins] AD STREAMING 
					
					- 10K AIERA Premier Membership + 1 MONTH 
					
					- 10×10 FLEX INSIDE THE VENUE '
					rate='Rate: ₹3,99,999'		
				/>
				
				<Card 
					image='/genie.svg'
					imageName='genie'	
					title='ASSOCIATES'
					details='
					Telecasting LIVE ADVERTISEMENTS 
					[HUGE LED SCREEN ]
					
					- Promoting & Advertising All Over MADURAI 
					[FLEX & POSTERS ]
					
					- DIGITAL MARKETING More Than 25 Lakh Viewers 
					
					- CONCERT Live 4 Hours 
					AD STREAMING 
					
					- INSIDE THE CAMPUS 
					[ AD BANNERS ]
					- 10×10 FLEX 
					INSIDE THE VENUE '
					rate='Rate: ₹99,999'		
				/>
				</div>
		</div>	
	)

}