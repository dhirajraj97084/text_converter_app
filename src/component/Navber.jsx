import React, { useState } from 'react'

function Navber() {

  const [mode, setMode] = useState(false);


  
  const [text, setText] = useState('Enter text here..');
  const upper=()=>{
    setText(text.toUpperCase())
    setMode(true);
  }

  const lower=()=>{
    setText(text.toLowerCase())
    setMode(false);
  }


  return (
    <div >
      <div className="div flex justify-center items-center bg-[url('/image/img2.jpg')] bg-cover h-screen w-full bg-center bg-no-repeat">
         
         <div className="box">
          <h1 className='text-4xl py-7 font-bold text-center text-white'>TEXT CONVERTER APP</h1>
          <div className="container px-5  ">
            <textarea value={text} onChange={(e)=>setText(e.target.value)}  className='bg-gray-200 text-black rounded-md outline-none hover:ring-2 hover:ring-red-600 flex px-6 py-2 w-full  h-32  md:w-96 lg:w-96 md:h-44 lg:h-44 '></textarea>
            <div className="div flex justify-center">
             {mode===false?(<button onClick={upper} className='py-2 px-7 my-5 rounded-md ring-2 hover:ring-blue-500 ring-blue-500/50  text-white font-bold text-xl' >Convert Upper</button>)
             :(<button onClick={lower} className='py-2 px-7 my-5 rounded-md ring-2 hover:ring-blue-500 ring-blue-500/50  text-white font-bold text-xl' >Convert lower</button>)}
            </div>
          <div className="div">
            <h1 className='text-3xl text-white font-semibold'> Your Text summery</h1>
            <p className='text-yellow-300'>{text.split(" ").length} words and {text.length} characters</p>
            <p className='text-yellow-300'>{0.008 *(text.split(" ").length)} min. read  </p>
            <h1 className='text-3xl text-white font-semibold'> Preview</h1>
            <h1 className='text-xl text-yellow-300 font-semibold text-wrap md:w-96 lg:w-96 w-full  ' >{text}</h1>
          </div>
          </div>
         </div>
                  
      </div>
    </div>
  )
}

export default Navber
