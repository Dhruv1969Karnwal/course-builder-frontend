import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/utils/Dashboard/dashboardLayout";
import { Link } from "react-router-dom";

const CoursesPage = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <Link to="/teacher/create">
          <Button>New Course</Button>
        </Link>
      </div>
    </DashboardLayout>
  );
};

export default CoursesPage;
