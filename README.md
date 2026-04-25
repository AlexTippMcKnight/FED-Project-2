# Step 1 - Project Base
- Created SvelteKit
- Setup turso database for later deployment with vercel
- Added environment variables 
- Setup base project structure
- Basic homepage to test project works

# Step 2 - Layout / Navigation
- Edited +layout.svelte for general css, navbar and footer 
- Setup routing structure for project

# Step 3 - Services Page (W/ Database)
- Setup services table in Turso
    -id
    -name
    -description
    -price
    -duration
- Data is fetched via api route '/api/services'
- Displays the services
- Service card component made for reuseability when displaying services
- removed .env file from .gitignore

# Step 4 - Booking System
- Added dynamic routing to book a service '/book/[id]'
- Booking form for user input (name, email, date, notes)
- Bookings table was created on turso with: 
    -id
    -service_id
    -name
    -email
    -date
    -notes
    -status

# Step 5 - Login/Register/Logout
- Setup login page/api
- Setup register page/api
- Setup logout navButton/api
- Setup session cookies
- Setup NavBar change on login state

# Step 6 - Admin
- Setup admin user (Matt, matt@tud.ie, password)
- Setup admin page to manage bookings
- Updated bookings api
- Updated NavBar change on login state to add admin link for admins (currently matt)
- Admin can update status of bookings

# Step 7 - Error page
- Setup custom error page
- Improved admin error page to prompt admin login if not logged into an admin account

# Step 8 - Contact page
- Setup contact page
- Added dashboard route and links

# Step 9 - Dashboard page
- Setup Dashboard page for users to see their orders 
- Made a custom error page similar to the admin one which prompts users to login if they are not.
- Changed how emails are stored in database and cookies, to stop duplicate emails via different capitalization
- Added back my post code which i accidently deleted in a earlier commit, resulting in no bookings sending to the database

# Step 10 - Minor fixes
- On register form submission it now redirects to /login rather than saying 'you can login now'
- Bookings now require data before submitting to avoid null data in database table
- After booking form submission text boxes are now cleared
- Added loading text to services page

# Step 11 - Loading messages
- Just added loading messages where necessary (admin and user dashboards)

# Step 12 - Minor Ux improvements
- Added user: and role: to header
- Added booking counter for users

# Random Commit - I got bored 
- added a message popup for friends

# Step 13 - Booking Total/Filter
- Added total bookings to admin and user dashboards 
- Added filter buttons for booking dashboards (AI help)

# Step 14 - Message Database
- Added a table to the database for submissions from contact page
- Added a message board link for admin page
- Added timers to form submission success messages

# Step 15 - Booking Page Update
- Fixed booking page (forgot to declare variable :P)
- Added an indicator of what service is actually being booked

# Step 16 - CSS 
- I spent too long on this i forgot exactly what i did
- Made an app.css file to import into +layout.svelte to avoid bloating it too much
- Deleted any duplicate css i could find
- Changed a few div classes to match global css class
- This might be my final commit 