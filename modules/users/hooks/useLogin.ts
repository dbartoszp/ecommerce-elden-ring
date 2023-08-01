import { useMutation } from "@tanstack/react-query";
import { login } from "../services/apiAuth";
import { toast } from "react-hot-toast";
// import Router from "next/router";

type User = {
  email: string;
  password: string;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (user: User) => login(user),
    onSuccess: (user) => {
      console.log(user);
      //   Router.push("/");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided credentials are incorrect");
    },
  });
};
