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