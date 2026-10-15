async function loadAssignments() {
    const tableBody = document.getElementById("assignmentsTable");

    if (!tableBody) {
        console.error("Assignments table body not found.");
        return;
    }

    tableBody.innerHTML = "<tr><td colspan='5'>Loading assignments...</td></tr>";

    try {
        const { data, error } = await supabaseClient
            .from("assignments")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) throw error;

        if (!data || data.length === 0) {
            tableBody.innerHTML =
                "<tr><td colspan='5'>No assignments found.</td></tr>";
            return;
        }

        tableBody.innerHTML = data.map(item => `
            <tr>
                <td>${escapeHTML(item.title)}</td>
                <td>${escapeHTML(item.description || "")}</td>
                <td>${escapeHTML(item.class_name || "")}</td>
                <td>${escapeHTML(item.due_date || "")}</td>
                <td>${escapeHTML(item.created_at || "")}</td>
            </tr>
        `).join("");

    } catch (error) {
        console.error("Error loading assignments:", error);
        tableBody.innerHTML =
            "<tr><td colspan='5'>Could not load assignments. Check the browser console.</td></tr>";
    }
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

document.addEventListener("DOMContentLoaded", loadAssignments);

<form id="assignmentForm">
  <input id="title" type="text"
         placeholder="Assignment title" required>

  <textarea id="description"
            placeholder="Assignment instructions"></textarea>

  <input id="class_name" type="text"
         placeholder="Class e.g. Grade 6">

  <input id="due_date" type="date">

  <button type="submit">Save Assignment</button>
</form>

<p id="message"></p>

<div id="assignmentsList"></div>

<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="supabase.js"></script>
<script src="assignments.js"></script>
