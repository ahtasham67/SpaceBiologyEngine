import React, { useEffect } from 'react';
import { supabase } from './supabaseClient';

function TestSupabase() {
  useEffect(() => {
    const testConnection = async () => {
      try {
        // Simple call: list all tables (or any metadata)
        const { data, error } = await supabase.from('pg_tables').select('*').limit(1);

        if (error) {
          console.error('Supabase connection failed:', error.message);
        } else {
          console.log('Supabase connection successful!');
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };

    testConnection();
  }, []);

  return <div>Supabase connection test — check console.</div>;
}

export default TestSupabase ;
