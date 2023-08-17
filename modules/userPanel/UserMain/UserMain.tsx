import { LogoutButton } from "@/modules/Header/LogoutButton/LogoutButton";

export const UserMain = () => {
  return (
    <main className="mb-12 w-full items-center  justify-center border-b border-b-dark-green pb-12 pt-36  text-center sm:w-3/12">
      <h1 className="text-2xl font-semibold tracking-wider text-dark-green">
        MY ACCOUNT
      </h1>
      <LogoutButton />
    </main>
  );
};
