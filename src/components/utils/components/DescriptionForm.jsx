import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  description: z.string().min(1, {
    message: "Description is required",
  }),
});

const DescriptionForm = ({ initialData, courseId }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  const { control, handleSubmit } = form;
  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values) => {
    // TODO:  patch request and add toggleEdit()
    console.log("values of", values);
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course description
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit description
            </>
          )}
        </Button>
      </div>
      {!isEditing && <p className={cn(
        "text-sm mt-2",
        !initialData?.description && "text-slate-500 italic"
      )}>{initialData?.description || "No description"}</p>}
      {isEditing && (
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              control={control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="e.g. 'This course is about ...'"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button type="submit" disabled={!isValid || isSubmitting}>
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
      <DevTool control={control} />
    </div>
  );
};

export default DescriptionForm;
