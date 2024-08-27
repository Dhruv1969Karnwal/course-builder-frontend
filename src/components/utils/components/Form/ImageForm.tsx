import { Button } from "@/components/ui/button";
import { ImageIcon, Pencil, PlusCircle } from "lucide-react";
import { useState } from "react";
import { Course } from "@/types/course";
import FileUpload from "../../fileUpload/fileUpload";



interface ImageFormProps {
  initialData: Course;
  courseId: number;
}

const ImageForm = ({ initialData, courseId }: ImageFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);


  console.log(courseId);

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course Image
        <Button onClick={toggleEdit} variant="ghost">
            {isEditing && (<>Cancel</>)}
            {!isEditing && !initialData.imageUrl && (
                <>
                <PlusCircle className="h-4 w-4 mr-2" />
                Add an image
                </>
            )}
            {
                !isEditing && initialData.imageUrl && (
                    <>
                    <Pencil className="h-4 w-4 mr-2" />
                    Edit image
                    </>
                )
            }
        </Button>
      </div>
      {!isEditing && (
        !initialData?.imageUrl ? (
            <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
                <ImageIcon className="h-10 w-10 text-slate-500" />
                </div>
        ) : (
            <div className="relative aspect-video mt-2">

            </div>
        )
      )}
      {isEditing && (
        <div>
           <FileUpload /> 
           <div className="text-sm mt-4">16:9 aspect ratio recommended</div>
        </div>
      )}
    </div>
  );
};

export default ImageForm;
