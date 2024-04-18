import React from 'react'

const HoverAndFocus = () => {
  return (<>
 
    <div>
        <button className='hover:bg-sky-700 bg-slate-400 hover:shadow-lg text-slate-50 py-2 mx-1 w-40'>tıkla</button>
        <button className=' text-white bg-yellow-400 w-40 rounded-lg focus:ring-4 '>tıkla</button>
        <button className='hover:bg-sky-700 bg-slate-400 hover:shadow-lg text-slate-50 py-2 mx-1 w-40'>tıkla</button>
        </div> 
        <div className='mt-3'>
            <input type="email" className= "border border-gray-800 focus:outline-slate-900 block w-1/2 p-3 rounded-lg peer"/>
            
            <p className='mt-2 text-red-600 text-sm invisible peer-invalid:visible'>please provide a valid e mail address</p>
        </div>



    </>
  )
}

export default HoverAndFocus