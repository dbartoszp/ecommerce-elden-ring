import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { signup } from "./apiUseSignup";

type UserSignup = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const useSignup = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (user: UserSignup) => signup(user),
    onSuccess: (user) => {
      console.log(user);
      router.refresh();
      router.push("/account");
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });
};
