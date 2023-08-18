import { UserGeneralInfo } from "@/modules/userPanel/UserGeneralInfo/UserGeneralInfo";
import { UserMain } from "@/modules/userPanel/UserMain/UserMain";
import { UserOrders } from "@/modules/userPanel/UserOrders/UserOrders";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session || !session.user) {
    redirect("/login");
  }
  return (
    <div className="items-center justify-center">
      <UserMain />
      <UserOrders />
      <UserGeneralInfo />
    </div>
  );
}
