export default function Card(props) {
	// Split the details string into an array of items based on a specific delimiter (e.g., '- ')
	const detailsList = props.details.split('- ').filter((item) => item.trim() !== '');
  
	return (
	  <div className='bg-black p-6 rounded-lg shadow-lg h-3/6 w-full mx-auto w-full'>
		<div className="rounded-lg p-6">
		  <div className='font-bold bg-gradient-to-r from-cyan-500 to-cyan-500 bg-clip-text text-transparent sm:text-2xl text-4xl'>{props.title}</div>
		  <div className='font-bold text-white sm:text-md lg:text-lg'>
			<ul className="list-disc pl-6">
			  {detailsList.map((detail, index) => (
				<li key={index} className="text-white">{detail.trim()}</li>
			  ))}
			</ul>
		  </div>
		 <div className='flex'>
			<span className='font-bold text-white text-3xl my-auto'>{props.rate}</span>
		  </div>
		</div>
	  </div>
	);
  }
  