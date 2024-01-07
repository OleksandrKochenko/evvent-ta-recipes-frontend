import { Form } from "@/components/form";

export default function SignIn() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <Form title="Sign in to your account" type="signin" />
    </div>
  );
}
