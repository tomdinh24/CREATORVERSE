import { createClient } from "@supabase/supabase-js";

const URL = "URL";

const API_KEY = "API_Key";


export const supabase = createClient( URL, API_KEY);
