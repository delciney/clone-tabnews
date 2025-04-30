const { exec } = require("node:child_process");

function checkPostgres() {
  exec("npm run services:pg_isready", handleReturn);

  function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write("🟨");
      checkPostgres();
      return;
    }
    console.log("\n\n✅ PostgreSQL is ready\n");
  }
}

process.stdout.write("\n\n🛑 Waiting for PostgreSQL to be ready...\n");

checkPostgres();
