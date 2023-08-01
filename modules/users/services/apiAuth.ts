import supabase from "@/services/supabase.mjs";

type User = {
  email: string;
  password: string;
};

export const login = async (user: User) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: user.password,
  });

  if (error) throw new Error(error.message);

  console.log(data);
  return data;
};
