ST CARELS ACADEMY

School Management System

Motto: Excellency via Faith

A modern, responsive, web-based school management system designed to simplify school administration, learner registration, teacher management, examination records, academic analysis and CBC/CBE reporting.

---

1. Application Overview

The St Carels Academy School Management System is built as a single-page web application.

The HTML, CSS and JavaScript are combined into one main file called "index.html".

The system uses Supabase for authentication and database storage.

2. System Modules

Dashboard

- Total student statistics.
- Total teacher statistics.
- Grades and classes statistics.
- Examination marks statistics.
- Refreshable dashboard information.

Student Management

- Register learners.
- Record admission numbers.
- Record learner names and gender.
- Assign grades and streams.
- Record dates of birth.
- Store parent and guardian information.
- Search, print and export student records.

Teacher Management

- Register teachers.
- Record TSC numbers.
- Store teacher contact information.
- Record teacher positions.
- Assign grades and subjects.
- Search, print and export teacher records.

Grades and Classes

- Register PP1 to Grade 9.
- Record streams.
- Set academic years.
- View and manage class records.

Examination Marks

- Record learner examination marks.
- Select grades.
- Select CBE learning areas.
- Record examination names.
- Record terms and academic years.
- Search, print and export marks.

Examination Analysis

- Automatic subject analysis.
- Learner-by-learner analysis.
- Highest and lowest marks.
- Subject averages.
- Overall average.
- Learner ranking within the selected grade.
- Performance bands:
  - Exceeding
  - Meeting
  - Approaching
  - Below
- Filter results by grade, examination, term, year and learning area.
- Export examination analysis to CSV.

Note: The current analysis assumes marks are out of 100.

CBC Report Cards

- Record learner details.
- Record grade and stream.
- Record academic year and term.
- Record attendance.
- Store learning areas in JSON format.
- Record class teacher comments.
- Record headteacher comments.
- Record parent comments.

CBE Learning Areas

Supports PP1, PP2 and Grades 1–9.

Learning areas are displayed according to the selected grade.

Curriculum reference: "Kenya Institute of Curriculum Development (KICD)" (https://kicd.ac.ke/cbc-materials/curriculum-designs/regular-curriculum-designs/).

Bulk SMS

- Automatic SMS message generation.
- Parent and guardian message templates.
- Teacher and custom recipient options.
- Fees reminders.
- Parents' meeting notices.
- Examination announcements.
- School opening and closing notices.
- Attendance notifications.
- Results notifications.
- SMS character and segment estimation.
- Message preview.
- Local draft saving.

Important: Actual SMS delivery is not yet connected. An SMS provider and secure server-side integration are required.

---

3. Technology Used

Technology| Purpose
HTML5| Application structure
CSS3| Styling and responsive design
JavaScript| Application functionality
Supabase Auth| User authentication
Supabase PostgreSQL| Database storage
Supabase RLS| Database access control
GitHub Pages| Website hosting

---

4. Project File Structure

All application code is combined into one HTML file.

St-car/
│
├── index.html
└── README.md

- "index.html" contains the complete application.
- "README.md" contains project documentation.

No separate CSS or JavaScript files are required.

---

5. Supabase Configuration

The application connects to Supabase using the JavaScript client library.

The Supabase URL and publishable key are configured inside "index.html".

const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
const SUPABASE_KEY = "YOUR_SUPABASE_PUBLISHABLE_KEY";

Replace the placeholders with the correct project details.

Never expose a Supabase service-role or secret key in public HTML.

Authentication Setup

1. Open your Supabase project.
2. Navigate to Authentication.
3. Open Users.
4. Create an administrator or staff account.
5. Use the registered email and password to log in.

The current application does not provide a public registration form.

Required Database Tables

Create and configure the following tables in Supabase:

Table| Purpose
"students"| Learner information
"teachers"| Teacher information
"school_grades"| Grades and classes
"marks"| Examination marks
"exam_analysis"| Stored examination analysis records
"cbc_report_cards"| CBC report-card records

The application also requires suitable school membership records and school-specific access policies when operating as a multi-school platform.

Database Security

Enable Row Level Security (RLS) on all tables containing school information.

Configure policies to ensure authenticated users can only access records belonging to their authorised school.

For multi-school operation, records must be associated with the correct "school_id". The current HTML requires further multi-tenant integration before it can safely enforce this separation.

---

6. How to Run the Application

1. Download or clone the GitHub repository.
2. Open "index.html" in a browser or deploy it using GitHub Pages.
3. Configure the Supabase project URL and publishable key.
4. Create the required database tables.
5. Configure authentication and RLS policies.
6. Create the required Supabase user accounts.
7. Log in using the registered credentials.

An internet connection is required for Supabase authentication and cloud database operations.

---

7. GitHub Pages Deployment

1. Open your GitHub repository.
2. Upload "index.html" and "README.md" to the main repository folder.
3. Open repository Settings.
4. Select Pages.
5. Under Build and deployment, select Deploy from a branch.
6. Choose the "main" branch.
7. Select the "/ (root)" folder.
8. Save the settings.

GitHub Pages will publish the application using "index.html".

---

8. Important Application Notes

- The dashboard statistics depend on database access permissions.
- Student ID in the Marks form must match an existing "students.id" database value.
- Examination analysis reads saved marks and learner information from Supabase.
- CSV export and printing are supported.
- SMS drafts are saved locally in the browser.
- Real SMS sending requires an external SMS provider and secure backend.
- Multi-school data isolation requires school-specific database relationships and RLS policies.
- Verify CBE learning areas against current official curriculum guidance.

---

9. Future Development

Potential future upgrades include:

- Multi-school registration and subscription management.
- School administrator and staff role management.
- Automatic student ID selection from the database.
- Teacher workload and learning area allocation.
- Automatic CBC report-card generation.
- Timetable management.
- School fees management.
- Safaricom M-Pesa integration.
- SMS bundle purchasing and delivery.
- Parent and learner portals.
- PDF report generation.

---

10. Developer

TNZMEDIA

Project: St Carels Academy School Management System

Motto: Excellency via Faith

© 2026 St Carels Academy. All Rights Reserved.