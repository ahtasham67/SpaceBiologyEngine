import { createClient } from '@supabase/supabase-js';



const SUPABASE_URL='https://kkatmfvuomnsyrqoyflf.supabase.co';
const SUPABASE_ANON_KEY= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrYXRtZnZ1b21uc3lycW95ZmxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MTM2NzUsImV4cCI6MjA3NDQ4OTY3NX0.NTatWz9h1v6HtPbkBqlcqoPwo0w25D-VROekJ1X_Lro' ;



export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
