import { Route, Routes } from "react-router-dom"
import Homepage from "./components/Homepage"
import Sidebar from "./components/Sidebar"
import Favorites from "./components/Favorites"
import { useEffect, useState } from "react"
import { bouncyArc } from 'ldrs'
//https://youtu.be/Z_AWfuJXXCI?si=B33SiJHjXWbtjdan&t=2877
const App = () => {
    bouncyArc.register()

const [loading, setLoading] = useState(true)

useEffect(()=>{
  const timer = setTimeout(() => {
    setLoading(false)
  }, 4000);

  return ()=> clearTimeout(timer)
}, [])

  return (
    <div className="flex">
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <l-bouncy-arc size="70" speed="1.65" color="black"></l-bouncy-arc>
        </div>
      ) : (
        <>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </>
      )}
    </div>
  )
}

export default App