import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const UserGeneralInfo = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;
  console.log(user);
  return (
    <div className="mb-32 mt-12 items-center justify-center text-center">
      <h2>
        Your current email: <span className="font-semibold">{user?.email}</span>
        <br />
        {user?.phone
          ? `Your phone number: ${user.phone}`
          : `You haven't added a phone number yet`}
      </h2>
    </div>
  );
};
