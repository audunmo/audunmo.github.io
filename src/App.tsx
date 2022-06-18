import "./index.css"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./pages/Home"
import Content from "./pages/Mail"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Content />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
