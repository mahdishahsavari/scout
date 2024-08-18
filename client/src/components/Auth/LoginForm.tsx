import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { handleFormSubmit } from "@/app/(auth)/login/action";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import LetterPullup from "../ui/LetterPullup";

export default function LoginForm() {
  const [errors, setErrors] = useState<any>(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const router = useRouter();

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await handleFormSubmit(formData);

    if (result.errors) {
      setErrors(result.errors);
      console.error("Validation or server error:", result.errors);
    } else if (result.success) {
      toast("Congratulations, you logged into your account 🥳");
      router.replace("/");
      console.log("Login was successful");
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <LetterPullup
        words="Welcome to SCOUT"
        delay={0.05}
        className="text-center font-bold text-xl text-neutral-800 dark:text-neutral-200"
      />
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center">
        login to your account
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="projectmayhem@fc.com"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              placeholder="••••••••"
              type={passwordVisible ? "text" : "password"}
            />
            <button
              type="button"
              onClick={handleTogglePasswordVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              aria-label={passwordVisible ? "Hide password" : "Show password"}
            >
              {passwordVisible ? (
                <EyeOff size={20} className="text-rose-600 animate-pulse" />
              ) : (
                <Eye size={20} />
              )}{" "}
            </button>
          </div>
        </LabelInputContainer>

        <button
          className="flex items-center justify-center gap-2 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Login <MoveRight size={16} />
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <div>
          Do not you have account?{" "}
          <Link href="/register" className="hover:underline">
            register
          </Link>
        </div>
      </form>

      {errors && (
        <div className="text-red-700">
          {errors.email && (
            <p className="text-sm font-medium hover:underline cursor-help">
              {errors.email.join(", ")}
            </p>
          )}
          {errors.password && (
            <p className="text-sm font-medium hover:underline cursor-help">
              {errors.password.join(", ")}
            </p>
          )}
          {errors.server && (
            <p className="text-sm font-medium hover:underline cursor-help">
              {errors.server}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
