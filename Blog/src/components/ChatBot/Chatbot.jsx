import React, { useState } from 'react'

import axios from 'axios';

const Chatbot = () => {
     const api = "AIzaSyAALh8qA0aGGSGxAZUc55jaXJ9dQqbSVZc"
        const [que, setQue] = useState("");
        const [ans, setAns] = useState("");
        const [resQue, setResQue] = useState("");

    const chatBot =  async ()=>{
        const res = await axios({
            url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${api}`,
            method:'post',
            data: {
                contents: [{parts:[{text: JSON.stringify(que)}] }]
            }
        })
        setResQue(que)
        setAns(res["data"]["candidates"][0]["content"]["parts"][0]["text"])
        // console.log(res["data"]["candidates"][0]["content"]["parts"][0]["text"])
    }
  return (
    <div id="chatBot" className=" w-2/5 min-h-9 text-black px-12">
            <div className='w-full flex min-h-5 items-center justify-center'>
                <h1 className=" text-amber-900 py-2 font-bold text-xl">Your Friendly Chatbot</h1>
            </div>
            <div className=" h-80 border border-amber-900 p-5 overflow-y-auto bg-amber-200 rounded-md text-amber-950">
                {ans?
                (<>
                <h1 className=" font-semibold">{resQue}?</h1><br/>
                <h3>{ans}</h3>
                </>)
                :null}
            </div>
            <textarea id="" placeholder="Ask your question here." rows={"3"} className="text-black border border-amber-600 rounded px-2 block resize-y w-full my-5
            scrollbar-none overscroll-y-auto focus:ring-2 focus:outline-none focus:ring-amber-600" 
            onChange={(event)=>{setQue(event.target.value)}}></textarea>
            <div className='w-full flex min-h-5 items-center justify-center'>
                <button onClick={chatBot} className=' font-bold text-white bg-amber-900 rounded-sm py-3 px-10 '>Search</button>
            </div>
    </div>
  )
}

export default Chatbot