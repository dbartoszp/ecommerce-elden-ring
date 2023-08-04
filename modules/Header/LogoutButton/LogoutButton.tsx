"use client";
import { useLogout } from "@/modules/users/hooks/useLogout";
import { Button } from "../../ui/Button/Button";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

export const LogoutButton = () => {
  const logout = useLogout();
  const onLogout = () => {
    logout.mutate();
  };

  return (
    <div>
      <Button size="lg" disabled={logout.isLoading} onClick={onLogout}>
        <HiArrowRightOnRectangle />
      </Button>
    </div>
  );
};
