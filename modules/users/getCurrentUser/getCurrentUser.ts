import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const getCurrentUser = async () => {
  const supabase = createClientComponentClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session;
};
