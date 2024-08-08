import { Route, Routes } from "react-router-dom"
import Search from "./pages/Search"
import Home from "./pages/Home"
import Courses from "./pages/Teacher/Courses"
import Analytics from "./pages/Teacher/Analytics"
import Create from "./pages/Teacher/Create"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/teacher/courses" element={<Courses />} />
      <Route path="/teacher/analytics" element={<Analytics />} />
      <Route path="/teacher/create" element={<Create />} />
    </Routes>
    </>
  )
}

export default App
