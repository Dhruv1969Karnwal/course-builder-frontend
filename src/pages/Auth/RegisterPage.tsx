import { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DevTool } from "@hookform/devtools";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import CardWrapper from "@/components/utils/components/Auth/cardWapper";

// Define the form schema using Zod
const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().min(1, {
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  role: z.string().min(1, {
    message: "Role is required",
  }),
  file: z.instanceof(File).nullable().optional(), // Single file or null, optional
});

type FormSchemaType = z.infer<typeof formSchema>;

const RegisterPage = () => {
  const navigate = useNavigate();
  const fileUploadRef = useRef<HTMLInputElement>(null);
  const [avatarImage, setAvatarImage] = useState<string>(
    "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg"
  );

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "",
      file: null,
    },
  });

  const fileRef = form.register("file");

  const { control, handleSubmit, setValue } = form;
  const { isSubmitting, isValid } = form.formState;

  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await axios.post(
        "http://localhost:8080/signUp",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success("Signed up successfully");
      navigate("/");
    },
    onError: () => {
      toast.error("Sign up failed");
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (
    values: FormSchemaType
  ) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("role", values.role);

    if (values.file) {
      formData.append("file", values.file);
    }

    mutation.mutate(formData);
  };

  const handleImageClick = () => {
    fileUploadRef.current?.click();
  };

  const uploadImageDisplay = () => {
    if (fileUploadRef.current?.files) {
      const uploadedFile = fileUploadRef.current.files[0];
      if (uploadedFile) {
        const cachedUrl = URL.createObjectURL(uploadedFile);
        setAvatarImage(cachedUrl);
        setValue("file", uploadedFile);
      }
    }
  };

  return (
    <CardWrapper
      label="Create an account"
      title="Register"
      backButtonHref="/auth/logIn"
      backButtonLabel="Already have an account? Login here."
    >
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-center w-full">
              <Avatar className="h-28 w-28" onClick={handleImageClick}>
                <AvatarImage src={avatarImage} />
              </Avatar>
            </div>
            <FormField
              control={control}
              name="file"
              render={() => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="file"
                      placeholder="Upload Avatar"
                      {...fileRef}
                      className="hidden"
                      ref={fileUploadRef}
                      onChange={uploadImageDisplay}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="johndoe@gmail.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="John Doe" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger id="role">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="teacher">Teacher</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="HOD">HOD</SelectItem>
                        <SelectItem value="principal">Principal</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Save
          </Button>
        </form>
      </Form>
      <DevTool control={control} />
    </CardWrapper>
  );
};

export default RegisterPage;
