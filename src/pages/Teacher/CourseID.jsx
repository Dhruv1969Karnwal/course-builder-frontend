import { useLocation } from "react-router-dom"

const CourseIDPage = () => {
  const location = useLocation()
  const {pathname} = location
  return (
    <div>CourseIDPage : ${pathname}</div>
  )
}

export default CourseIDPage