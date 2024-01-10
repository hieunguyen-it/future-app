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
} from "@components/ui/form";
import { z } from "zod";
import { signInSchema } from "@schemas";
import  Social  from "./social";
import HeaderSignIn from "./header-sign-in";
import { useSignInMutation } from "@hooks/useAuth";

 const FormSignIn = () => {
  const {mutate: mutateSignIn } = useSignInMutation()

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signInSchema>) {
    mutateSignIn(values)
  }
  return (
    <div>
      <HeaderSignIn />
      <div className="px-[76px]">
        <p className="text-black-100 text-3xl mt-[50px]">Sign in</p>
        <Social />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User name or email address</FormLabel>
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
                  <FormLabel>Your password</FormLabel>
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
              <p className="text-white text-lg ">Sign in</p>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default FormSignIn;
