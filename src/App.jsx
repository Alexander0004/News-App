import { useState } from "react"
import NavHeader from "./Components/NavHeader"
import NewsBoard from "./Components/NewsBoard"

function App() {
  

  const [category, setCategory] = useState("general")
  
  return (
    <>
    <NavHeader setCategory={setCategory}/>
    <NewsBoard category={category}/>
    </>
  )
}

export default App
