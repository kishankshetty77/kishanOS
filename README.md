# KishanOS

A living portfolio that replaces the static PDF resume. Every project shows the problem, what I built, my role, and links to a live demo and source code.

**Live:** https://kishan-os.vercel.app

## Features

- Project case studies with live demos and source code
- Skills that link to the project that proves them
- AI assistant that answers only from verified profile facts and says "I don't have verified information about that" when it doesn't know
- Fully responsive dark UI

## Tech stack

React, Vite, Tailwind CSS, a Vercel serverless function, and the Groq API. Hosted on Vercel.

## How the AI chat works

The browser calls `/api/chat`, a serverless function. The API key stays on the server as an environment variable and is never sent to the browser. The system prompt restricts answers to a fixed list of facts about me.

## Run locally

    npm install
    npm run dev

The chat needs the Vercel environment to run, so it works on the deployed site.

## Author

Kishan K Shetty: CSE (AI/ML) student, Bangalore
GitHub: github.com/kishankshetty77
LinkedIn: linkedin.com/in/kishan-k-shetty
