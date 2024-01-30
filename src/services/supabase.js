import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://oxuaqpsqvksjrmrnpssv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94dWFxcHNxdmtzanJtcm5wc3N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyNTU4NzQsImV4cCI6MjAyMDgzMTg3NH0.uL-V5ocqsHczW8lyu9S02-ZfSiqKn53POiYktGz2r0U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
