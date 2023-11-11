import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { db, localClient } from ".";

async function runMigrate() {
  console.log("Running migrations...");

  const start = Date.now();
  await migrate(db, { migrationsFolder: "lib/db/migrations" });
  const end = Date.now();

  console.log(`✅ Migrations completed in ${end - start}ms`);

  await localClient.end();

  process.exit(0);
}

runMigrate().catch((err) => {
  console.error("❌ Migration failed");
  console.error(err);
  process.exit(1);
});
