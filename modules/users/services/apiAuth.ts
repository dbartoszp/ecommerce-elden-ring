// import supabase from "@/services/supabase.mjs";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

type UserSignup = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const signup = async (user: UserSignup) => {
  const { data, error } = await supabase.auth.signUp({
    email: user.email,
    password: user.password,
    options: {
      emailRedirectTo: `${location.origin}/auth/callback`,
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
      },
    },
  });

  if (error) throw new Error(error.message);

  console.log(data);
  return data;
};

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

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
};