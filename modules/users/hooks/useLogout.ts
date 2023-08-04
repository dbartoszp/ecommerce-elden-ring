import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../services/apiAuth";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      router.refresh();
      toast.success("Successfully logged out");
      queryClient.removeQueries();
      router.push("/login");
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });
};
