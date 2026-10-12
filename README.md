# ST CARELS School Management System

This repository contains a school management web app for St Carels Umoja Kwanza.

## Files
- `index.html` — landing page
- `login.html` — administrator login
- `dashboard.html` — dashboard overview
- `student.html` — student management page
- `app.js` — setup wizard and Supabase configuration

## Setup
1. Create a Supabase project.
2. Open the Supabase SQL editor and add the database schema for the app.
3. Update the project URL and public anon key in `app.js`.
4. Open `index.html` in a browser.

## Notes
- Use the public anon key in frontend JavaScript.
- Never expose the service-role key in the browser.
- The app uses `school_id` to link classes, subjects, students, and settings.
