import { LogoutButton } from "@/modules/Header/LogoutButton/LogoutButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <h1>Hello, {session.user.email}!</h1>
      <LogoutButton />
    </div>
  );
}
