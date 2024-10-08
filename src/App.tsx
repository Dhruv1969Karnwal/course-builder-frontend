// import { Route, Routes } from "react-router-dom"
// import HomePage from "./pages/Home"
// // import SearchPage from "./pages/Search"
// // import CoursesPage from "./pages/Teacher/Courses"
// // import AnalyticsPage from "./pages/Teacher/Analytics"
// // import CreateCoursePage from "./pages/Teacher/Create"
// // import CourseIDPage from "./pages/Teacher/CourseID"
// // import Register from "./pages/Auth/Register"
// // import LogIn from "./pages/Auth/LogIn"

// function App() {

//   return (
//     <>
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       {/* <Route path="/search" element={<SearchPage />} />
//       <Route path="/auth/signUp" element={<Register />} />
//       <Route path="/auth/LogIn" element={<LogIn />} />
//       <Route path="/teacher/courses" element={<CoursesPage />} />
//       <Route path="/teacher/analytics" element={<AnalyticsPage />} />
//       <Route path="/teacher/create" element={<CreateCoursePage />} />
//       <Route path="teacher/courses/:id" element={<CourseIDPage />} /> */}
//     </Routes>
//     </>
//   )
// }

// export default App

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";
import CoursesPage from "./pages/Teacher/Courses";
import AnalyticsPage from "./pages/Teacher/Analytics";
import CreateCoursePage from "./pages/Teacher/Create";
import CourseIDPage from "./pages/Teacher/CourseID";
import RegisterPage from "./pages/Auth/RegisterPage";
import LogInPage from "./pages/Auth/LogInPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/auth/signUp" element={<RegisterPage />} />
        <Route path="/auth/LogIn" element={<LogInPage />} />
        <Route path="/teacher/courses" element={<CoursesPage />} />
        <Route path="/teacher/analytics" element={<AnalyticsPage />} />
        <Route path="/teacher/create" element={<CreateCoursePage />} />
        <Route path="teacher/courses/:id" element={<CourseIDPage />} />
      </Routes>
    </>
  );
}

export default App;
