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
