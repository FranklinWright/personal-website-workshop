## !! READ BEFORE STARTING !!
You'll need Node.js 20.9+ for this repo to work. Visit https://nodejs.org to install it on your machine if you haven't already. You can run `node -v` in your terminal to check if it is already installed.

This repo uses `npm` for package management. This should be installed along with Node.js. Run `npm -v` to ensure it is installed.

The teck stack for the website is React + Next.js using TypeScript and Tailwind CSS. It also uses a linter, ESLint, for style-checking.

### How to Fork and Clone This Repo Locally
First, navigate to the original GitHub repository in your browser and click the **Fork** button in the top-right corner. Choose your GitHub account as the destination. This creates a copy of the repository under your account.

Next, clone your fork to your local machine:

1. Go to your forked repository on GitHub.
2. Click the **Code** button and copy the HTTPS URL.
3. Ensure you are in the correct directory on your machine
4. Open a terminal and run:
   ```bash
   git clone <PASTE_REPO_URL_HERE>
   ```
   For example
   ```bash
   git clone https://github.com/your-username/repo-name.git
   ```
   
### How to use this repo
All scripts can be found in `package.json` under `scripts`. The two you really need to care about are `dev` and `lint`.

`dev`: Creates a localhost instance of your website, running on one of your ports. If you visit that localhost port in your browser, your website will pop up.
`lint`: Checks for issues in your repo, from bugs to style issues.

You can run either by prepending `npm run <script>` to them. For example, `npm run dev` run the `dev` script.

### Useful links
- Tailwind CSS cheat sheet: https://nerdcave.com/tailwind-cheat-sheet
- More of a guide then a cheat sheet, but here's one for React: https://github.com/HassanHabibTahir/React-cheatsheet (as a side note, personal websites, and especially homepages, won't need anything super complicated in React)
- Next/Link is great for adding links: https://nextjs.org/docs/app/api-reference/components/link
- Next/Image is great for adding images: https://nextjs.org/docs/app/api-reference/components/image
- Here's some info on how to create subpages with Next.js App Router: https://nextjs.org/docs/app/getting-started/layouts-and-pages

# Getting Started
1. Fork this repo. Ensure your fork is public.
2. Work on the website. The main page lives under page.tsx. For more on the structure of a project, visit https://nextjs.org/docs/app/getting-started/project-structure for details.
3. Answer the questions in the heading below. Keep your answers descriptive and concise. You can use the questions to guide your website development.
4. Thats it! Have fun! We'll look at forks from the main repo to ensure valid entries into the raffle.

# Questions - MUST ANSWER TO BE ENTERED INTO RAFFLE!
1. Briefly describe everything you've added on from the starter template.
Home Page: Added a bouncing "DVD-style" animation featuring my photo and the "Franklin > Void" logo.

About Page: Built a "Head-to-Head" comparison section that uses photos and a table to show why my stats are better than the competition.

Projects Page: Created custom cards for my top projects, specifically highlighting my National ranking.

Contact Page: Designed a layout that makes it easy to find my info while "disabling" contact for the competition.

2. What's the first impression you want a website visitor to have about you? How does your website accomplish that?
The Impression: I want them to see I am a leader who delivers high-level results, not just a student "trying things out".

How it works: The site uses massive bold text and direct comparisons to show my 4th place National ranking and Eagle Scout rank immediately.

3. What's your favorite part of the website you've made? What needs improvement?
Favorite Part: The bouncing image on the home page. It’s fun, catches the eye, and makes the "Franklin > Void" message impossible to miss.

Improvement: I’d like to make the images load even faster on slow mobile connections.

4. Where would you take your website in the future? Talk about additional sections, aspirations, etc.
New Content: I want to add a blog section where I combine my Computer Science knowledge with my History minor.

Interactive Features: I plan to add a live "Project Tracker" that pulls data directly from my GitHub to show my daily progress.
