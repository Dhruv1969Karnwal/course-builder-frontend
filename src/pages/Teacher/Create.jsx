import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DashboardLayout from "@/components/utils/Dashboard/dashboardLayout";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});

const CreateCoursePage = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const { control, handleSubmit } = form;
  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values) => {
    console.log("values of", values);
    toast.success("Course submitted");
  };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
        <div>
          <h1 className="text-2xl">Name your courses</h1>
          <p className="text-sm text-slate-600">
            What would you like to name your course? Don&apos;t worry, you can
            change this later.
          </p>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-8">
              <FormField
                control={control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. 'Advanced web development'"
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormDescription>
                      What will you teach in this course?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-x-2">
                <Link to="/">
                  <Button type="button" variant="ghost">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" disabled={!isValid || isSubmitting} >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
          <DevTool control={control} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreateCoursePage;
