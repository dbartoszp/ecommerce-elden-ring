import { useMutation } from "@tanstack/react-query";
import { signup } from "../services/apiAuth";
import { useRouter } from "next/navigation";

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
      router.push("/account");
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });
};
