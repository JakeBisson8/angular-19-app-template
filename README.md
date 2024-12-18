# angular-19-app-template

### About

A basic Angular 19 starter template with basic configuration of prettier, eslint and husky.

### Installation

1. Select to use the template in GitHub and create a new repository
2. Clone your new repository

```bash
git clone <repository_link>.git
```

3. Udpate `package.json` to change the `name`, `description`, `version`, `keywords` etc. to match your project.
4. Install project dependencies using your package manager of choice

```bash
npm install
```

5. Update angular.json to remove angular-19-app-template as the project name to whatever you want
6. Update src/custom-theme.scss to change angular-19-app-template to the project name you want
7. Change app component title to project name or any other title
8. Install recommended vscode extensions
   1. Angular Language Service
   2. ESLint
   3. Prettier - Code Formatter
9. Consider configuring vscode to run prettier on file saved
   1. Open `settings.json`
   2. Add the following rules

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

10. Start the development server

```bash
npm run start
```

### Environments

The project comes pre-configured with production and development environments. The environment files can be found in `src/environments`. For more on environments see the [Angular docs](https://angular.dev/tools/cli/environments#configure-environment-specific-defaults).

### Lint

Lint and don't apply fixes

```bash
npm run lint
```

Lint and apply fixes where possible

```bash
npm lint:fix
```

### Format

Check for format errors:

```bash
npm run prettier
```

Format files:

```bash
npm run prettier:write
```

### Test

```bash
npm run test
```

### License

[MIT](https://github.com/JakeBisson8/angular-17-app-template/blob/main/LICENSE)  
[https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/)
