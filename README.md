# Uber Taxi Copy

## Web application for taxi ordering

This small app illustrates the map with an ability of searching for addresses and creating the route from point A to point B.

## The architecture of the app

```
/
├─ node_modules/          # packages installed by Yarn
│
├─ src/
|  ├─ app/                # Root App layer. Here's global things and things that related exactly to the App
|  |  ├─ assets/          # Static images folder
|  |  |  ├─ images        # Static images
|  |  |  ├─ options       # Static images for options
|  |  ├─ components       # All components
|  |  ├─ hooks            # Custom hooks
|  |  ├─ static           # Static data
|  |  ├─ store            # Redux root store
|  ├─ pages               # Pages layer with the main page index.tsx
|  ├─ globals.css         # Global styles
├─ .env.local             # Enviromental variables
├─ .eslintrc.json         # Linting preferences for JavasScript
├─ .gitignore             # List of files and folders not tracked by Git
├─ next.config            # Next.js configuration file
├─ package.json           # Installed dependencies
├─ postcss.config         # Compilation of CSS in Next.js
├─ README.md              # This file
├─ tailwind.config        # Tailwind configuration
├─ tsconfig.json          # Specifies the root files and the compiler options
└─ yarn.lock              # Versions of the dependencies specified in a package.json file
```

## Tech

Libraries and technologies, which were used:

- [NextJS](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [React](https://react.dev)
- [Redux](https://redux.js.org)
- [Goodle maps API](https://developers.google.com/maps)
- [Icons by manshagraphics](https://freeicons.io/profile/433683) [on](https://freeicons.io)

## Installation

```sh
create .env.local file with your google API key
yarn
yarn start
```

.env example:

```sh
NEXT_PUBLIC_MAP_KEY = aBcde_Fghijk_lmNoP
```

 ✨ Author: <korenko.artem9@gmail.com>
