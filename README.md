# CRA Opinionated Starter with TailwindCSS

An opinionated React starter project using TailwindCSS for styling


## Tech Stack

- [React App](https://reactjs.org/docs/getting-started.html) project - bootstrapped with [`create-react-app v5`](https://create-react-app.dev/docs/getting-started).
- React & React DOM v17
- Type Checker - TypeScript v4.5.2
- CSS Styling - [TailwindCSS](https://tailwindcss.com/)
- Page Routing - [React Router v6](https://reactrouter.com/docs/en/v6)
- UI Development - [Storybook v6.4.7](https://storybook.js.org/docs/react/get-started/introduction)
- Linting - ESlint v8, AirBnB & Eslint-config-next
- Formatting - [Prettier](https://prettier.io/docs/en/index.html)
- Unit Testing - [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- Test Mocking - [Mock Service Worker](https://mswjs.io/)



## Usage

Inside the project directory run using `npm` or `yarn`:

- `start` - Runs the built app in development mode.
- `build` - builds the app for production to the `build` folder.
- `test` - unit testing with Jest & react-testing-library.
- `eject` -
- `check-lint` - ESlint configured for Next. Use `.eslintrc.json` to setup & `.eslintignore` to ignore files.
- `check-types` - runs TypeScript's [`tsc` CLI command](https://www.typescriptlang.org/docs/handbook/compiler-options.html) and pretty prints any warnings/errors.
- `check-format` - asks Prettier to check all of our files (excluding the ones in .prettierignore) for formatting issues.
- `format` - will format your code prettier using opinionated settings inside `.prettierrc` file. Use `.prettierignore` to ignore files.
- `storybook` - To run your Storybook. Open [http://localhost:6006/](http://localhost:6006/) to view it in the browser.
- `build-storybook` - build Storybook - create static Storybook project.


### Run

```bash
yarn dev
# or
npm run dev
```

Entry point `src/index.tsx`.

## Eslint configurations

Lint initially set according to Airbnb's style guide.
## Format configurations

[Prettier](https://prettier.io/) is set using my opinionated [rules](https://prettier.io/docs/en/configuration.html) inside config file `.prettierrc`
