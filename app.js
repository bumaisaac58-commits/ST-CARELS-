document.addEventListener("DOMContentLoaded", function () {
if (!window.supabaseClient) {
console.error("ERROR: Supabase Client Not Initialized!");
return;
}

console.log("SUCCESS: St Carels Academy is connected to Supabase!");

async function testConnection() {
    const { data, error } = await window.supabaseClient
        .auth.getSession();

    if (error) {
        console.error("Session error:", error.message);
        return;
    }

    console.log("Supabase client is working.");
    console.log("Current session:", data.session);
}

testConnection();

});


if (!window.db) {
    console.error("Supabase client not initialized!");
} else {
    console.log("Supabase client is ready!");

    // Example: Read students from your database
    async function loadStudents() {
        const { data, error } = await window.db
            .from("students")
            .select("*");

        if (error) {
            console.error("Error loading students:", error.message);
            return;
        }

        console.log("Students:", data);
    }
}