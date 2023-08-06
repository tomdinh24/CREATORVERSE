import { createClient } from "@supabase/supabase-js";

const URL = "https://nmerdefzqcxlajekrmem.supabase.co/";

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tZXJkZWZ6cWN4bGFqZWtybWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkyMDM5NTYsImV4cCI6MjAwNDc3OTk1Nn0.m9sBW7gvYnJGZl6akwUTRDQ_ssTvpMw-txLlSZOfLq4";


export const supabase = createClient( URL, API_KEY);
