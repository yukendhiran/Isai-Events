export default function Card(props) {
	// Split the details string into an array of items based on a specific delimiter (e.g., '- ')
	const detailsList = props.details.split('- ').filter((item) => item.trim() !== '');
  
	return (
	  <div className='bg-black p-6 rounded-lg shadow-lg h-3/6 sm:w-3/4 mx-auto lg:w-full'>
		<div className="rounded-lg p-6">
		  <div className='font-bold text-yellow-300 text-3xl'>{props.title}</div>
		  <div className='font-bold text-white text-lg'>
			<ul className="list-disc pl-6">
			  {detailsList.map((detail, index) => (
				<li key={index} className="text-white">{detail.trim()}</li>
			  ))}
			</ul>
		  </div>
		 <div className='flex'>
			<span className='font-bold text-white text-2xl my-auto'>{props.rate}</span>
		  </div>
		</div>
	  </div>
	);
  }
  