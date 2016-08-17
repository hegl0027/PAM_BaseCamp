[![Build Status](http://tfs:8080/tfs/MayoClinic/_apis/public/build/definitions/2f49d3e6-4c50-4efe-9a92-a45130cc4a0a/545/badge)](http://tfs/tfs/MayoClinic/Mayo%20Open%20Developer%20Network/_git/mayo-web-basecamp?path=%2F&version=GBdevelop&_a=contents)

#Get Started
###Notable Technologies
- [AngularJS 1.x](https://angularjs.org/) -- MV* framework for web applications
- [Gulp](http://gulpjs.com/) -- Build system
- [Sass](http://sass-lang.com/) -- CSS preprocessor
- [Babel (ES6)](https://babeljs.io/) -- JavaScript transpiler for code written to the ECMAScript 2015 standard ([modules](https://babeljs.io/docs/learn-es2015/#modules), [classes](https://babeljs.io/docs/learn-es2015/#classes), [template strings](https://babeljs.io/docs/learn-es2015/#template-strings), and [more](https://babeljs.io/docs/learn-es2015/))

###Prerequisites
1. [Git](https://git-scm.com/downloads)
2. [NodeJS](https://nodejs.org/en/)
Update to the latest NPM version
  ```bash
  npm install -g npm
  ```
3. Ruby
  - [Windows](http://rubyinstaller.org/) -- use the installer option to add Ruby commands to the PATH
  - [Everyone else](https://www.ruby-lang.org/en/)

###Setup
Clone or download the repo and run the following from the web project root directory

```bash
gem install sass scss_lint
npm install
npm run build
npm start
```

###Build System [(NPM Scripts)](https://docs.npmjs.com/misc/scripts)
|  Command  |  Description  |
|  -------  |  -----------  |
|  npm run build  |  Execute entire build  |
|  npm run build watch  |  Watch for file updates and run corresponding build tasks  |
|  npm start  |  Serve ./dist on local http server  |


###Unit Testing ([Karma](https://karma-runner.github.io/0.13/index.html))
The unit test files (app/\*\*/\*.spec.js) should hang out with the the rest of the application code

|  Command  |  Description  |
|  -------  |  -----------  |
|  npm run karma  |  Execute Karma test runner;  autowatch true  |
|  npm run karma-q  |  Execute Karma test runner;  autowatch false;  single run  |


###E2E Testing ([Protractor](http://www.protractortest.org/#/))
The Protractor tests live under the 'e2e-tests' folder
Dependent on HTTP Server
Available browser configs: firefox, chrome, ie, safari

|  Command  |  Description  |
|  -------  |  -----------  |
|  npm run protractor-<browser>  |  Execute the Protractor test suite for a given browser  |
|  npm run protractor-<browser>-q  |  Execute the Protractor test suite for a given browser, less the webdriver update  |
|  npm run protractor-<browser>-q -- --spec e2e-tests/<path to specs>  |  Execute Protractor against a specific set of spec files for a given browser  |


###API Tests ([Mocha](https://mochajs.org/) and [SuperTest](https://github.com/visionmedia/supertest))
The REST API tests live under the 'api-tests' folder
Dependent on HTTP Server

|  Command  |  Description  |
|  ---  |  ---  |
|  npm run api-tests  |  Execute the api tests  |


###Directory Structure
```
.
api-tests
app
|   components
|   shared
|   app.js
|   index.html
assets
|   fonts
|   images
|   |   favicon
|   |   inline-svg
|   |   svg-bundle
|   
|   scss
|   |   app.scss
|   |   _base.scss
|   |   _normalize.scss
|   |   _variable.scss
|
_dist
_docs
_e2e-tests
_node_modules
_reports
_test-configs
.babelrc
.eslintignore
.eslint.json
.npmrc
.scsslint.yml
.jsdoc.json
package.json
README.md
TODO.md
```

###File Naming Convention
File names should use kebab case for the base name (with dot notation to indicate a semantic type if applicable), e.g., "my-super-awesome-test-suite.spec.js".

|  File Type / Ext.  |  Description  |
|  ---  |  ---  |
|  *.config.js  |  Module/State configuration  |
|  *.directive.js  |  Directive configuration  |
|  *.controller.js  |  Controller class  |
|  *.spec.js  |  Test specification  |
|  *.page.js  |  Object literal representing the UI elements the test cases will need to interact with.  |
