import Card from './card'


export default function Plans() {
	return(
		<div className = 'bg-black bg-cover flex lg:flex-col sm:flex-col sm:justify-center sm:items-center sm:space-y-2  lg:space-y-4'>
				<div className='mt-10 mb-10 space-y-10'>
				<Card 
					image='/genie.svg'
					imageName='Free Plan'	
					title='SPONSORSHIP '
					details='Telecasting LIVE ADVERTISEMENTS  10 Rotation 30 Seconds
					[Huge LED Screens] 
					
					- Promoting & Advertising All Over MADURAI 
					[FLEX & POSTERS]
					
					- LOGO Sealed Tickets 
					[Live Tickets]
					
					- BROUCHURE Distribution Inside the VENUE 
					[BROUCHURES]
					
					- DIGITAL REACH More Than 25 LAKH Viewers
					
					
					- 10×15 FLEX Inside the Campus'
					rate='Rate: ₹5,99,999'		
				/> 
				
				<Card 
					image='/genie.svg'
					imageName='genie'	
					title='POWERED BY'
					details='Telecasting Live Advertisements 5 Rotation 15 to 20 Seconds
					[HUGE LED SCREEN]
					
					- Promoting & Advertising All Over MADURAI 
					[ FLEX & POSTERS ]
					
					- Logo Sealed Tickets 
					[LIVE TICKETS ]
					
					- DIGITAL REACH More Than 25LAKH Viewers 
					
					
					
					- 10×12 FLEX Inside the Campus '
					rate='Rate: ₹3,99,999'		
				/>
				
				<Card 
					image='/genie.svg'
					imageName='genie'	
					title='CO - SPONSOR'
					details='
					Telecasting LIVE ADVERTISEMENTS 2 to 3 Rotation 10 to 15 Seconds
					[HUGE LED SCREEN ]
					
					- Promoting & Advertising All Over MADURAI 
					[FLEX & POSTERS ]
					
					- DIGITAL REACH More Than 25 Lakh Viewers 
					
					- 10×10 FLEX 
					Inside the Campus  '
					rate='Rate: ₹99,999'		
				/>
				</div>
		</div>	
	)

}