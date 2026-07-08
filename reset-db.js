const { supabaseAdmin } = require("./my-backend/config/supabase");

async function resetDatabase() {
  if (!supabaseAdmin) {
    console.error("Supabase Admin client not configured.");
    return;
  }
  
  console.log("Wiping users table...");
  const { error: usersError } = await supabaseAdmin.from("users").delete().neq("id", "00000000-0000-0000-0000-000000000000"); // Deletes all rows
  if (usersError) {
    console.error("Error wiping users:", usersError);
  } else {
    console.log("Users wiped.");
  }
  
  console.log("Wiping documents table...");
  const { error: docsError } = await supabaseAdmin.from("documents").delete().neq("id", "00000000-0000-0000-0000-000000000000");
  if (docsError) {
    console.error("Error wiping documents:", docsError);
  } else {
    console.log("Documents wiped.");
  }
}

resetDatabase();
