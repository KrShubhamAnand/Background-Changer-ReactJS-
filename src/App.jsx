import { useState } from "react"


function App() {
  const [color, setColor] = useState("red")

  return (
    <>
    
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
      <h1 className="flex flex-wrap justify-center text-yellow">Background Changer</h1>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">

        <button onClick={() => setColor('red')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
        <button onClick={() => setColor('green')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
        <button onClick={() => setColor('black')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>Black</button>
        <button onClick={() => setColor('white')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"white"}}>White</button>
        <button onClick={() => setColor('blue')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>

        </div>
      </div>

      </div>
    </>
  )
}

export default App
