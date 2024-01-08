
import { useState } from "react";
import { Button, Input } from "@components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui";
import { signUpSchema } from "@schemas";
import { z } from "zod";
import { useAuth } from "@hooks/useAuth";

const FormSignUp = () => {
  const [userData, setUserData] = useState<UserRegister>();
  const { data } = useAuth(userData!);

  console.log("data", data);

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof signUpSchema>) {
    setUserData(values);
  }
  return (
    <div className="w-[50%]">
      <div className="px-[76px]">
        <p className="text-black-100 text-3xl mt-[50px]">Create an account</p>
        <div className="flex pr-12 pt-4 mb-8">
          <p className="text-black-100">Already have an account?</p>
          <link href={"/sign-in"} className="ml-2 ">
            <span className="text-black-200 font-medium underline">
              Sign in
            </span>
          </link>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-[300px] rounded-[32px] py-6 bg-gray-100"
            >
              <p className="text-white text-lg ">Create an account</p>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default FormSignUp;