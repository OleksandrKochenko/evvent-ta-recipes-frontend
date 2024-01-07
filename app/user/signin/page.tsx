import { Metadata } from "next";
import { Form } from "@/components/form";

export const metadata: Metadata = {
  title: "Recipe App",
  description: "Test assignment pet-project for Evvent",
};

export default function SignIn() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <Form title="Sign in to your account" type="signin" />
    </div>
  );
}
