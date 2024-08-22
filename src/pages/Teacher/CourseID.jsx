import DashboardLayout from "@/components/utils/Dashboard/dashboardLayout";
import { LayoutDashboard } from "lucide-react";
import TitleForm from "../../components/utils/components/Form/TitleForm";
import DescriptionForm from "@/components/utils/components/Form/DescriptionForm";
import { IconBadge } from "@/components/utils/components/ui/icon-badge";

const CourseIDPage = () => {
  // TODO:
  // fetch course by id in params make sure that ont teacher can fetch course by id
  // on fetching course it contains course.title

  const course = {
    title: "Course",
  };

  const requiredFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.price,
    course.categoryId,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  // console.log(totalFields, completedFields);

  const completionText = `(${completedFields}/${totalFields})`;
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">Course setup</h1>
            <span className="text-sm text-slate-700">
              Complete all fields {completionText}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-xl">Customize your course</h2>
            </div>
            <TitleForm initialData={course} courseId={course._id} />
            <DescriptionForm initialData={course} courseId={course._id} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CourseIDPage;
