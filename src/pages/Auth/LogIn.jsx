import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  
  
  import { zodResolver } from "@hookform/resolvers/zod";
  import { useForm } from "react-hook-form";
  import { z } from "zod";
  import CardWrapper from "@/components/utils/components/cardWapper";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
  import { DevTool } from "@hookform/devtools";
  import axios from "axios";
  import { useMutation } from "@tanstack/react-query";
  import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
  
  const formSchema = z.object({
    email: z.string().min(1, {
      message: "Email is required",
    }),
    password: z.string().min(1, {
      message: "Password is required",
    }),
  });
  
  const LogIn = () => {

    const navigate = useNavigate();

    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    });
  
    const { control, handleSubmit } = form;
    const { isSubmitting, isValid } = form.formState;
  
    const mutation = useMutation({
      mutationFn: async (data) => {
        const response = await axios.post("http://localhost:8080/logIn", data, {
          withCredentials: true
        });
        return response.data;
      },
      onSuccess: (data) => {

        toast.success("Signed in successfully");
        console.log('API Response:!!!',data);
        navigate("/")
      },
      onError: (err) => {
        toast.error("Not Signed in ...",err);
      },
    });
  
    const onSubmit = async (values) => {
      console.log(values);
      mutation.mutate(values);
    };

  
    return (
      <CardWrapper
        label="Create an account"
        title="Register"
        backButtonHref="/auth/SignUp"
        backButtonLabel="To Create a New Account? Register here."
      >
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
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
  
  export default LogIn;
  