"use client";

import loginHook from "@/hooks/loginHook";
import { loginSchema } from "@/lib/schemas";
import { LoginDataType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const LoginForm = () => {
  const rhForm = useForm<LoginDataType>({
    resolver: zodResolver(loginSchema),

    mode: "all",

    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginFormSubmit = async (flData: LoginDataType) => {
    const { message, success } = await loginHook(flData);

    if (!success) {
      console.log(message);
    }

    if (success) {
      console.log(message);
    }
  };

  return (
    <>
      <Card className="w-full sm:w-[350px]">
        <CardHeader className="grid place-items-center text-center">
          <CardTitle>Login</CardTitle>

          <CardDescription>Log into your account</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...rhForm}>
            <form
              onSubmit={rhForm.handleSubmit(loginFormSubmit)}
              className="space-y-8"
            >
              <FormField
                control={rhForm.control}
                name={"email"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="admin@example.com"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={rhForm.control}
                name={"password"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>

                    <FormControl>
                      <Input
                        type={"password"}
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full cursor-pointer"
                disabled={
                  rhForm.formState.isValid || rhForm.formState.isSubmitting
                    ? false
                    : true
                }
              >
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default LoginForm;
