<div id="top"></div>

<p align="center">
    <a href="https://github.com/nelsonacos/movies/graphs/contributors">
        <img src="https://img.shields.io/github/contributors/nelsonacos/movies.svg?style=for-the-badge" alt="GitHub contributors">
    </a>
    <a href="https://github.com/nelsonacos/movies/issues">
        <img src="https://img.shields.io/github/issues/nelsonacos/movies?style=for-the-badge" alt="GitHub issues">
    </a>
    <a href="https://github.com/tu-usuario/resume-creator-api/network">
        <img src="https://img.shields.io/github/forks/nelsonacos/resume-creator-api?style=for-the-badge" alt="GitHub forks">
    </a>
    <a href="https://github.com/tu-usuario/movies/stargazers">
        <img src="https://img.shields.io/github/stars/nelsonacos/movies?style=for-the-badge" alt="GitHub stars">
    </a>
    <a href="https://github.com/nelsonacos/movies/blob/main/LICENSE">
        <img src="https://img.shields.io/github/license/nelsonacos/movies?style=for-the-badge" alt="GitHub license">
    </a>
</p>

<br />
<div align="center">
  <img align="center" src="https://github.com/nelsonacos/movies/blob/main/src/assets/movies-logo.svg" alt="Movies" />
  <p align="center">
    Movie search engine
    <br />
    <br />
    <a href="#"><strong>Explore the documentation</strong></a>
    <br />
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="https://github.com/nelsonacos/movies/issues">Report a Bug</a>
    ·
    <a href="https://github.com/nelsonacos/movies/issues">Request a Feature</a>
  </p>
</div>
<br />

<p align="center">
    <a href="https://github.com/nelsonacos/movies">
        <img src="https://img.shields.io/badge/react-black?style=for-the-badge&logo=react" alt="React">
    </a>
    <a href="https://github.com/nelsonacos/resume-creator-api">
        <img src="https://img.shields.io/badge/typescript-black?style=for-the-badge&logo=typescript" alt="Typescript">
    </a>
    <a href="https://github.com/nelsonacos/resume-creator-api">
        <img src="https://img.shields.io/badge/docker-black?style=for-the-badge&logo=docker" alt="Docker">
    </a>
    <a href="https://github.com/nelsonacos/resume-creator-api">
        <img src="https://img.shields.io/badge/vite-black?style=for-the-badge&logo=vite" alt="Vite">
    </a>
</p>


## Getting Started

1. Clone the repository

    ```sh
    git clone https://github.com/nelsonacos/movies.git
    ```

2. Open the command line and navigate to the project folder

    ```sh
    cd movies
    ```
2. Create the `.env` file to configure the environment variables

    ```sh
    # Unix System
    cat .env.example > .env

    # Windows System
    copy .env.example .env
    ```
request your `API KEY` at https://www.omdbapi.com/apikey.aspx

3. Configure environment variables

    ```sh
    # Use a new OMDB_API_KEY
    VITE_OMDB_API_KEY=1gc2j8c9
    ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Starting the Project with Docker

```sh
docker build -t movies . && docker run -p 3000:3000 movies
```
Open http://localhost:3000 with your browser to see the result.

<p align="right">(<a href="#top">back to top</a>)</p>

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
<p align="right">(<a href="#top">back to top</a>)</p>