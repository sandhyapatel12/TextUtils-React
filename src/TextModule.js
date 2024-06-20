import React, { useState } from 'react'

const TextModule = () => {
    //set text
    const[text, setText] = useState('')

    const handleText = (e) =>
      {
        setText(e.target.value)   //display data in text box
      }

    const Upperclick = () =>
      {
        let setUpper = text.toUpperCase();
        setText(setUpper);
      }
    const Lowerclick = () =>
      {
        let setLower = text.toLowerCase();
        setText(setLower);
      }
      const Clearclick = () =>
      {
       setText(" ")    //remove previous data
      }
      const Copyclick = () =>
      {
        let text = document.getElementById('textBox');    //select data
        text.select();      //copy data
        navigator.clipboard.writeText(text.value)  //paste data
      }
      const removeSpace = () =>
      {
        let exSpace = text.split(/[ ]+/);   //remove extra spaces
        setText(exSpace.join(" "));
      }

      
  return (
    <>

    {/* logo */}
     <div className='flex justify-between max-w-6xl items-center mx-auto text-white mt-5'>
          <h1 className='font-bold text-3xl text-blue-700'>TEXTUTILS</h1>
    </div>
    
    <div className='flex flex-col justify-between max-w-5xl items-center my-5 mx-auto text-black' >
      <h1 className='text-center font-bold text-md md:text-lg'>Simplify Your Text Editing Experience</h1>

    
        <div className="p-6 w-full  mx-auto  rounded-xl shadow-md space-y-4 mt-5" >
          <textarea value={text} onChange={handleText} className="w-full h-52 px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent" placeholder="Enter your text here..." id='textBox'></textarea>
        </div>

        <div className='  mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
          <button onClick={Upperclick} className='bg-blue-700 text-white text-sm font-bold px-5 py-2 rounded-md shadow-md' >UpperCase</button>
          <button onClick={Lowerclick}  className='bg-blue-700 text-white text-sm font-bold px-5 py-2 rounded-md shadow-md'>LowerCase</button>
          <button onClick={Clearclick}  className='bg-blue-700 text-white text-sm font-bold px-5 py-2 rounded-md shadow-md'>ClearAll</button>
          <button onClick={Copyclick}  className='bg-blue-700 text-white text-sm font-bold px-5 py-2 rounded-md shadow-md'>Copy Text</button>
          <button onClick={removeSpace}  className='bg-blue-700 text-white text-sm font-bold px-5 py-2 rounded-md shadow-md'>Remove Extra Space</button>
        </div>

        <div>
          {/* count length for words and character */}
          <h1 className='text-sm mt-5 text-gray-500'>
            {text.split(" ").filter((element) =>    //not count  extra spaces
               {
                  return element.length !=0
                  
                }).length} Words and {text.length} Characters
          </h1>
        </div>
      </div>
    </>
  )
}

export default TextModule
