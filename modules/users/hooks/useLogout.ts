import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../services/apiAuth";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      console.log("logged out");
      router.refresh();
      queryClient.removeQueries();
      router.push("/login");
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });
};
