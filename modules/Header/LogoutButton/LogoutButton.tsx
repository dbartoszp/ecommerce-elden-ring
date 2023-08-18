"use client";
import { useLogout } from "@/modules/users/useLogout/useLogout";
import { Button } from "../../ui/Button/Button";

export const LogoutButton = () => {
  const logout = useLogout();
  const onLogout = () => {
    logout.mutate();
  };

  return (
    <div>
      <Button
        variant="danger"
        size="sm"
        disabled={logout.isLoading}
        onClick={onLogout}
      >
        LOGOUT
      </Button>
    </div>
  );
};
