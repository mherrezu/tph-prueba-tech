# TPH Interview Challenges

This project is a responsive and modular landing page for a gym, developed as part of a technical test. The application demonstrates modern web design and front-end practices using **Vue 3**. It also includes a basic authentication system with **registration** and **login** functionality via the Reqres API (https://reqres.in/).

### Principal requirements

- **Landing Page**
- **Registration Form:**
  - Validates email and password (minimum 6 characters).
  - Interacts with the Reqres API endpoint: `POST https://reqres.in/api/register`.
  - Displays errors for invalid inputs or API responses.
- **Login Form:**
  - Validates email and password.
  - Interacts with the Reqres API endpoint: `POST https://reqres.in/api/login`.
  - Displays errors for invalid inputs or API responses.
  - Stores the JWT token in `localStorage`.

## Tech Stack

<a href="https://vuejs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" width="40" height="40"/> </a>
<a href="https://vitejs.dev/" target="_blank" rel="noreferrer"><img src="https://github.com/dochne/wappalyzer/blob/main/src/images/icons/vite.svg" alt="vite" width="40" height="40"/></a>

## Project Setup

```sh
bun install
```

### Compile and Hot-Reload for Development

```sh
bun run dev
```

### Compile and Minify for Production

```sh
bun run build
```

## Demo

Insert gif or link to demo

## Authors

- [@mherrezu](https://www.github.com/mherrezu)
