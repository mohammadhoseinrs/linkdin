import React from 'react'

export default function Posts({fake}) {
  return (
    <div className='w-full  bg-white rounded-lg border-2 p-3 mt-5'>
        <div>
            <div className='flex' >
                <img className='w-12 h-12 object-cover rounded-full' src={fake.img} alt="" />
                <div className='text-gray-500 flex-1 font-light ml-3 text-xs'>
                    <p className='text-black font-bold text-sm'>{fake.name}</p>
                    <p>{fake.job}</p>
                    <div className='flex items-center'>
                       <p>6m  .</p> 
                       <div>
                       <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd" />
                        </svg>
                       </div>
                    </div>
                    
                    
                </div>
                <div className='hover:bg-blue-200 rounded-full cursor-pointer transition ease-in duration-200 h-6'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                </div>
                
            </div>
            <p  className='text-sm my-3'>{fake.desc}</p>
            <p className='text-blue-600 text-sm font-semibold cursor-pointer hover:opacity-70 transition ease-in duration-200'>See Translation</p>
            <div className='mt-4 mb-2 flex text-xs text-gray-400'>
            <p className='flex-1'>{fake.like} </p>
            <p>{fake.comment} comments</p>
            </div>
            <div className='flex-1 h-0.5 bg-gray-100 mb-2'></div>
            <div className='flex justify-between mx-4 text-gray-500 font-semibold text-sm'>
                <div className='flex items-center px-5 py-3 rounded-lg transition ease-in duration-200 cursor-pointer hover:bg-slate-300'>
                    <div  >   
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
</svg>
                    </div>
                    <p className='ml-2'>Like</p>
                </div>
                <div className='flex items-center px-5 py-3 rounded-lg transition ease-in duration-200 cursor-pointer hover:bg-slate-300'>
                    <div>   
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
</svg>
                    </div>
                    <p className='ml-2'>comment</p>
                </div>
                <div className='flex items-center px-5 py-3 rounded-lg transition ease-in duration-200 cursor-pointer hover:bg-slate-300'>
                    <div>   
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
</svg>
                    </div>
                    <p className='ml-2'>share</p>
                </div>
                <div className='flex items-center px-5 py-3 rounded-lg transition ease-in duration-200 cursor-pointer hover:bg-slate-300'>
                    <div>   
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
</svg>
                    </div>
                    <p className='ml-2'>send</p>
                </div>

            </div>
        </div>
    </div>
  )
}
