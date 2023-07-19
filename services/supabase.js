import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://clewygpyfjeeepgwjepq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsZXd5Z3B5ZmplZWVwZ3dqZXBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk3NTQzMzAsImV4cCI6MjAwNTMzMDMzMH0.avGqB8rvW6BQ3p7h_JJDBnEX0i6FzyONXNZRNSDMb0M";
const supabase = createClient(supabaseUrl, supabaseKey);
