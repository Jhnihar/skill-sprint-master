# Skill Sprint Master

Build a full-stack web app called "Skill Sprint" using Next.js (App Router) and TailwindCSS, with simple placeholder backend services (static JSON). The app must include authentication (via localStorage), protected routes, skill assessments, adaptive testing, and a jobs page. Use clean, minimal UI.

Pages to Create
1. /login

Fields: email, password

Fake login: store {id, name, email} in localStorage

Redirect to /dashboard

2. /signup

Fields: name, email, password

Store user in localStorage

Redirect to /dashboard

3. /dashboard

Show: “Welcome, {username}”

Display 5 skill cards: Python, JavaScript, HTML, CSS, Java

Clicking any skill → navigate to /skill/:skill/pretest

4. /skill/:skill/pretest

Load MCQs using placeholder function getPreTest(skill)

Show all MCQs (static data)

On submit → redirect to /skill/:skill/learn

5. /skill/:skill/learn

Call getLearning(skill, userId)

Show:

Weak topics

Resource links

Button “Start Test” → /skill/:skill/test

6. /skill/:skill/test

Show one adaptive question at a time

Use:

getAdaptiveQuestion(skill, level)

submitAdaptiveAnswer(skill, questionId, isCorrect)

If API returns endTest = true, redirect back to /skill/:skill/learn

Otherwise load next question

7. /jobs

Skill dropdown

Call getJobs(skill)

Show job cards

If no results, show fallback dummy jobs

Navbar

Show: Dashboard | Jobs | Logout

Logout clears localStorage and redirects to /login

Navbar visible only when logged in

Route Protection

If user not in localStorage, redirect to /login for all private pages.

Services Folder

Create /services with placeholder API functions returning static JSON:

auth.js

pretest.js

learning.js

adaptive.js

jobs.js

Each function should return simple mock data (I will replace with real APIs later).

UI Requirements

Use TailwindCSS

Clean, minimal, modern design

Skill cards, MCQ cards, and job cards should be simple and uniform

Responsive layout

Goal

Deliver a fully working prototype of Skill Sprint with routing, authentication, adaptive test flow, and job listings — all powered by placeholder data and localStorage.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/553a1835-6967-4e77-899d-7516ab2af5ef).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
