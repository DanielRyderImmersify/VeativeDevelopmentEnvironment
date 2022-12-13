# How to Run

-   Install Node.js version 16.14.2 (or above)
-   Verify your installation in the terminal with the commands `node --version` and `npm -v`
-   Clone the project locally
-   Open the folder in VSCode or alternative IDE
-   If using VSCode recommended extensions are ESLint, GitHub Pull Requests, npm, npm intellisense, Path Intenllisense, Prettier, React Native Tools
-   Ask for the .gitignore file and .env and add them to the root of the project
-   If you are setting up this project for the first time you will need to fill out the variables within the .env file using the credentials from Playfab and/or the S3 bucket that is going to be used for development
-   Open the terminal (Ctrl+~) or (Ctrl+P and then type terminal)
-   `npm run install-all`
-   `npm run dev`

# How to update to latest version

-   `git pull`

-   `npm run install-all`

# Where to develop

-   Front end (React) development should take place in `src/components/Veative` and any routes can be added to `App.js` (uppercase not to be mistaken with app.js)
-   Front end (scss) development should take place in `src/components/SCSS/veativeStyles.scss` and can be complied into css using a live saas compiler extension
-   If any routes need to be added to the backend (NodeJS) this can be done in `node/routes` and the route can be added to `app.js` (lowercase app not to be mistaken with App.js)

# How to push to Git

-   `git checkout` (your working branch)

-   `git pull`

-   `git add .`

-   `git commit -am "message"`

-   `git push origin`

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the server and client together
Open [https://localhost:3000](https://localhost:3000) to view it in the browser.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## HTML
Use semantic HTML for markups.<br/>
Add comments on starting and ending of each sections<br/>
Add `alt` tag for all `img` components.<br/>
Bootstrap 5 is used for responsive framework, you can use Bootstrap classes if you want.<br/>
Everything should be responsive and tested in various devices.<br/>

## Styling
Use SCSS only for styling.<br />
You can use https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass for compiling SCSS files.<br/>
Do not edit/delete any existing stylesheets(both CSS&SCSS).<br />
Add all your styles to Veativestyle.scss, you can import common stylesheets(common.scss, colors.scss, fonts_import.scss etc).<br />
If you need to add any reusable CSS component, add it to the `common.scss` file with comment<br/>
Use proper classnames which are relevant to the components.<br />
Add comments on starting and ending of each styling sections for easy understanding.

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
