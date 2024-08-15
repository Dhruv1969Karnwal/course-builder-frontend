import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import SearchPage from "./pages/Search"
import CoursesPage from "./pages/Teacher/Courses"
import AnalyticsPage from "./pages/Teacher/Analytics"
import CreateCoursePage from "./pages/Teacher/Create"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/teacher/courses" element={<CoursesPage />} />
      <Route path="/teacher/analytics" element={<AnalyticsPage />} />
      <Route path="/teacher/create" element={<CreateCoursePage />} />
    </Routes>
    </>
  )
}

export default App
