import { Route, Routes } from "react-router-dom"
import Search from "./pages/Search"
import Home from "./pages/Home"
import Courses from "./pages/Teacher/Courses"
import Analytics from "./pages/Teacher/Analytics"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/teacher/courses" element={<Courses />} />
      <Route path="/teacher/analytics" element={<Analytics />} />
    </Routes>
    </>
  )
}

export default App
