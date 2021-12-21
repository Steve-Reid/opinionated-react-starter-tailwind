# CRA Opinionated Starter

An opinionated React starter project


## Tech Stack

- [React App](https://reactjs.org/docs/getting-started.html) project - bootstrapped with [`create-react-app v5`](https://create-react-app.dev/docs/getting-started).
- React & React DOM v17
- Type Checker - TypeScript v4.5.2
- Page Routing - React Router v6
- Storybook v6.4.7
- Lint - ESlint v8, AirBnB & Eslint-config-next
- Format - Prettier
- Unit Testing - Jest + react-testing-library
- Mocking - Mock Service Worker



## Usage

Inside the project directory run using `npm` or `yarn`:

- `build` - builds the app for production to the `build` folder.
- `start` - Runs the built app in development mode.
- `lint` - ESlint configured for Next. Use `.eslintrc.json` to setup & `.eslintignore` to ignore files.
- `check-types` - runs TypeScript's [`tsc` CLI command](https://www.typescriptlang.org/docs/handbook/compiler-options.html) and pretty prints any warnings/errors.
- `check-format` - asks Prettier to check all of our files (excluding the ones in .prettierignore) for formatting issues.
- `format` - will format your code prettier using opinionated settings inside `.prettierrc` file. Use `.prettierignore` to ignore files.
- `storybook` - To run your Storybook. Open [http://localhost:6006/](http://localhost:6006/) to view it in the browser.
- `build-storybook` - build Storybook - create static Storybook project.
- `clean-storybook` - clean static Storybook folder.
- `test` - unit testing with Jest & react-testing-library.
- `test:watch` - watch our jest tests.
- `test:ci` - unit testing with Jest & react-testing-library using the ci flag.
- `cypress:open` - create a cypress E2E directory with some examples.
- `cypress:run` - run the E2E tests and record video.
- `cypress:clean` - delete `cypress` folder.
- `prepare` - Install husky.

### Run

```bash
yarn dev
# or
npm run dev
```

Entry point `pages/index.tsx`.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
## Eslint configurations

Lint set according to Airbnb and NextJS style guides.
## Format configurations

[Prettier](https://prettier.io/) is set using my opinionated [rules](https://prettier.io/docs/en/configuration.html) inside config file `.prettierrc`
