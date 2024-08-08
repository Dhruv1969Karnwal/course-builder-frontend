import { Button } from "@/components/ui/button"
import DashboardLayout from "@/components/utils/Dashboard/dashboardLayout"
import { Link } from "react-router-dom"

const Courses = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
      <Link to='/teacher/create'>
        <Button>
          New Course
        </Button>
      </Link>
      </div>
    </DashboardLayout>
  )
}

export default Courses