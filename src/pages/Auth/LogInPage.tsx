import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  
  
  import { zodResolver } from "@hookform/resolvers/zod";
  import { useForm, SubmitHandler  } from "react-hook-form";
  import { z } from "zod";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
  import { DevTool } from "@hookform/devtools";
  import axios from "axios";
  import { useMutation } from "@tanstack/react-query";
  import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CardWrapper from "@/components/utils/components/Auth/cardWapper";
  
  const formSchema = z.object({
    email: z.string().min(1, {
      message: "Email is required",
    }),
    password: z.string().min(1, {
      message: "Password is required",
    }),
  });
  
  const LogInPage = () => {

    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    });
  
    const { control, handleSubmit } = form;
    const { isSubmitting, isValid } = form.formState;
  
    const mutation = useMutation({
      mutationFn: async (data: z.infer<typeof formSchema>) => {
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
        toast.error("Not Signed in ...");
        console.log('API Response:!!!',err);
      },
    });
  
    const onSubmit : SubmitHandler<z.infer<typeof formSchema>> = async (values: z.infer<typeof formSchema>) => {
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
  
  export default LogInPage;
  