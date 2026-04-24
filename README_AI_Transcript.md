## AI Tool Used

* ChatGPT (OpenAI)

---

## How AI Was Used

AI was used as a support tool to:

* plan the project structure
* troubleshoot errors
* explain SvelteKit and Svelte 5 concepts
* assist with implementing features

All code was reviewed, tested, and adapted before use.

---

# Step-by-Step AI Interaction Summary

---

## Step 1 — Project Setup

**Prompt:**

> How do I set up a SvelteKit project and connect it to a database?

**AI Response Summary:**

* Guided project creation
* Suggested Turso as database
* Explained environment variables

**How I used it:**

* Created project and `.env` file
* Set up database connection manually

---

## Step 2 — Layout and Navigation

**Prompt:**

> How do I create a layout with navigation in SvelteKit?

**AI Response Summary:**

* Explained `+layout.svelte`
* Provided navbar structure

**How I used it:**

* Built layout and adapted styling
* Updated to Svelte 5 syntax (`{@render children()}`)

---

## Step 3 — Services System

**Prompt:**

> How do I load data from a database and display it?

**AI Response Summary:**

* Suggested API route (`/api/services`)
* Explained fetch and rendering

**How I used it:**

* Created services table in Turso
* Built API route and frontend page
* Created reusable `ServiceCard` component

---

## Step 4 — Booking System

**Prompt:**

> How do I create a booking form and store data?

**AI Response Summary:**

* Provided form example
* Showed POST request to API
* Explained database insert

**How I used it:**

* Built booking form
* Implemented `/api/bookings`
* Stored data in database

---

## Step 5 — Authentication

**Prompt:**

> How do I implement login and cookies in SvelteKit?

**AI Response Summary:**

* Explained login API
* Showed cookie usage
* Suggested conditional UI

**How I used it:**

* Created register/login pages
* Implemented cookie-based session
* Updated navigation based on login state

---

## Step 6 — Admin Dashboard

**Prompt:**

> How do I restrict access to admin users?

**AI Response Summary:**

* Suggested role-based access using cookies
* Provided protected route example

**How I used it:**

* Created admin route
* Implemented access control
* Added “Access Denied” page with login prompt

---

## Step 7 — Debugging and Fixes

**Prompts included:**

* “Why am I getting a 500 error?”
* “Why is my database URL undefined?”
* “Why doesn’t my route work?”

**AI Response Summary:**

* Identified environment variable issues
* Fixed API structure
* Corrected routing problems

**How I used it:**

* Debugged issues step-by-step
* Tested fixes before applying

---

# Reflection on AI Usage

AI was used as a learning and support tool rather than a replacement for development.


