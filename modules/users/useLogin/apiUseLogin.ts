import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();
type UserLogin = {
  email: string;
  password: string;
};

export const login = async (user: UserLogin) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: user.password,
  });

  if (error) throw new Error(error.message);

  console.log(data);
  return data;
};
