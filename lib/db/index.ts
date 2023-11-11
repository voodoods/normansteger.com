import { drizzle } from 'drizzle-orm/vercel-postgres';
import { createClient, sql } from '@vercel/postgres';

export const localClient = createClient({
  connectionString: process.env.POSTGRES_URL_LOCAL,
})

export const db = drizzle(process.env.VERCEL_ENV === 'development' ? localClient : sql);
