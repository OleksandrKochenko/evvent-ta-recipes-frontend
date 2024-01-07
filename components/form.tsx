"use client";
import Link from "next/link";
import { Button } from "./button";
import { FormField } from "./form-field";
import { useDispatch } from "react-redux";
import { logIn, register } from "@/redux/auth/operations";
import { AppDispatch } from "@/redux/store";

export const Form = ({
  title,
  type,
}: {
  title: string;
  type: "signup" | "signin";
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    type === "signin"
      ? void dispatch(logIn(data))
      : void dispatch(register(data));
  };

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          {title}
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          {type === "signup" && (
            <FormField
              name="username"
              title="Your name"
              placeholder="John Johnson"
              required
            />
          )}
          <FormField
            name="email"
            title="Your email"
            placeholder="name@company.com"
            required
          />
          <FormField
            name="password"
            title="Password"
            placeholder="••••••••"
            required
          />
          <div className="flex justify-center">
            <Button
              type="submit"
              title={type === "signin" ? "Sign In" : "Sign Up"}
            />
          </div>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            {type === "signin"
              ? "Don’t have an account yet?"
              : "Already have an account?"}{" "}
            <Link
              href={type === "signin" ? "/user/signup" : "/user/signin"}
              className="font-medium text-blue-500 hover:underline dark:text-blue-500"
            >
              {type === "signin" ? "Sign Up" : "Sign In"}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
