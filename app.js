// ========================================
// ST CARELS SCHOOL MANAGEMENT SYSTEM
// Main Application JavaScript
// ========================================

// Check whether Supabase is configured
if (typeof window.supabaseClient === "undefined") {
    console.error(
        "Supabase is not connected. Check your supabase.js file."
    );
}

// Get Supabase client
const db = window.supabaseClient;

// Helper: Display messages
function showMessage(message, type = "info") {
    let box = document.getElementById("app-message");

    if (!box) {
        box = document.createElement("div");
        box.id = "app-message";

        box.style.padding = "12px";
        box.style.margin = "10px 0";
        box.style.borderRadius = "8px";

        document.body.prepend(box);
    }

    box.textContent = message;

    box.style.backgroundColor =
        type === "error" ? "#fee2e2" :
        type === "success" ? "#dcfce7" : "#dbeafe";

    box.style.color =
        type === "error" ? "#991b1b" :
        type === "success" ? "#166534" : "#1e40af";
}

// ========================================
// 1. LOGIN
// ========================================

async function loginUser(email, password) {
    if (!db) {
        showMessage("Database is not connected.", "error");
        return;
    }

    try {
        const { data, error } = await db.auth.signInWithPassword({
            email: email.trim(),
            password: password
        });

        if (error) throw error;

        showMessage("Login successful!", "success");

        window.location.href = "dashboard.html";

        return data;
    } catch (error) {
        showMessage(error.message, "error");
        return null;
    }
}

// Connect to a login form with id="login-form"
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const email =
                loginForm.querySelector('[name="email"]')?.value || "";

            const password =
                loginForm.querySelector('[name="password"]')?.value || "";

            await loginUser(email, password);
        });
    }
});

// ========================================
// 2. CHECK LOGIN SESSION
// ========================================

async function checkLogin() {
    if (!db) return null;

    try {
        const { data, error } = await db.auth.getSession();

        if (error) throw error;

        return data.session;
    } catch (error) {
        console.error("Session check failed:", error.message);
        return null;
    }
}

// ========================================
// 3. LOGOUT
// ========================================

async function logoutUser() {
    if (!db) return;

    try {
        const { error } = await db.auth.signOut();

        if (error) throw error;

        window.location.href = "login.html";
    } catch (error) {
        showMessage(error.message, "error");
    }
}

// Connect logout button
document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("logout-button");

    if (logoutButton) {
        logoutButton.addEventListener("click", logoutUser);
    }
});

// ========================================
// 4. REGISTER A STUDENT
// ========================================

async function addStudent(student) {
    if (!db) {
        showMessage("Database is not connected.", "error");
        return null;
    }

    try {
        const session = await checkLogin();

        if (!session) {
            showMessage("Please log in first.", "error");
            return null;
        }

        const { data, error } = await db
            .from("students")
            .insert([{
                admission_number: student.admission_number,
                full_name: student.full_name,
                class_name: student.class_name,
                gender: student.gender
            }])
            .select();

        if (error) throw error;

        showMessage("Student registered successfully!", "success");

        return data;
    } catch (error) {
        showMessage(error.message, "error");
        return null;
    }
}

// ========================================
// 5. DISPLAY STUDENTS
// ========================================

async function loadStudents() {
    if (!db) return [];

    try {
        const { data, error } = await db
            .from("students")
            .select("*")
            .order("full_name", { ascending: true });

        if (error) throw error;

        const tableBody = document.getElementById("students-list");

        if (tableBody) {
            tableBody.innerHTML = "";

            data.forEach((student) => {
                const row = document.createElement("tr");

                [
                    student.admission_number,
                    student.full_name,
                    student.class_name,
                    student.gender
                ].forEach((value) => {
                    const cell = document.createElement("td");
                    cell.textContent = value ?? "";
                    row.appendChild(cell);
                });

                tableBody.appendChild(row);
            });
        }

        return data;
    } catch (error) {
        showMessage(
            "Unable to load students: " + error.message,
            "error"
        );

        return [];
    }
}

// ========================================
// 6. CONNECT STUDENT REGISTRATION FORM
// ========================================

document.addEventListener("DOMContentLoaded", () => {
    const studentForm = document.getElementById("student-form");

    if (studentForm) {
        studentForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const student = {
                admission_number:
                    studentForm.querySelector('[name="admission_number"]')?.value.trim(),

                full_name:
                    studentForm.querySelector('[name="full_name"]')?.value.trim(),

                class_name:
                    studentForm.querySelector('[name="class_name"]')?.value,

                gender:
                    studentForm.querySelector('[name="gender"]')?.value
            };

            if (
                !student.admission_number ||
                !student.full_name ||
                !student.class_name ||
                !student.gender
            ) {
                showMessage("Please fill in all student details.", "error");
                return;
            }

            const result = await addStudent(student);

            if (result) {
                studentForm.reset();
                await loadStudents();
            }
        });
    }

    // Load records when the students list exists
    if (document.getElementById("students-list")) {
        loadStudents();
    }
});

// ========================================
// 7. UPDATE DASHBOARD STATISTICS
// ========================================

async function updateDashboard() {
    if (!db) return;

    try {
        const { count, error } = await db
            .from("students")
            .select("*", { count: "exact", head: true });

        if (error) throw error;

        const studentCount = document.getElementById("total-students");

        if (studentCount) {
            studentCount.textContent = count ?? 0;
        }
    } catch (error) {
        console.error("Dashboard update failed:", error.message);
    }
}

// ========================================
// 8. AUTOMATIC PAGE INITIALIZATION
// ========================================

document.addEventListener("DOMContentLoaded", async () => {
    const page = window.location.pathname.toLowerCase();

    const protectedPages = [
        "dashboard.html",
        "students.html",
        "exam.html",
        "report.html",
        "setting.html"
    ];

    const currentPage = page.split("/").pop();

    if (protectedPages.includes(currentPage)) {
        const session = await checkLogin();

        if (!session) {
            window.location.replace("login.html");
            return;
        }

        if (currentPage === "dashboard.html") {
            await updateDashboard();
        }
    }
});

console.log("St Carels School Management System loaded.");