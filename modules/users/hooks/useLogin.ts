import { useMutation } from "@tanstack/react-query";
import { login } from "../services/apiAuth";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

type User = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (user: User) => login(user),
    onSuccess: (user) => {
      // console.log(user);
      router.refresh();
      router.push("/");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided credentials are incorrect");
    },
  });
};
