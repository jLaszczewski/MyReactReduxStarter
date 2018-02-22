# MyReactReduxStarter
Empty React with Redux starter ready to npm install

This project is a simply preconfigured project, ready to install npm. To install clone this project and change folder name and property name in package.json. Then open terminal, go to the project directory and execute:
```
$ npm install
$ npm start
```
After that your project is ready to code!

Happy coding!








# Installing current version features

If you want use current version of all fetures you can config your project in easy way. To do that follow the steps below: 

1. Create file with yout project name. 
2. In directory of created file create 3 files:
   - index.html
   - package.json
   - webpack.config.js
   - .babelrc
   And another one in new folder "src":
   - index.js
3. In index.html type basic html tags:
   ```
   <!DOCTYPE html>
   <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="/style/style.css">
      <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/48938155eb24b4ccdde09426066869504c6dab3c/dist/css/bootstrap.min.css">
    </head>
    <body>
      <div class="container"></div>
    </body>
    <script src="/bundle.js"></script>
   </html>
   ```
4. Next in your index.js file type your basic component, for example: 
   ```
   import React, { Component } from 'react';
   import ReactDOM from 'react-dom';

    class App extends Component {
      render() {
        return <div>Hello World!!</div>;
      }
   }
   
   ReactDOM.render(<App />, document.querySelector('.container'));
   ```
5. In package.json type:
   ```
   {
    "name": "Name of your project",
    "version": "1.0.0",
    "description": "Weather app from udemy course",
    "main": "index.js",
    "scripts": {
      "start": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js",
      "test": "mocha --compilers js:babel-core/register --require ./test/test_helper.js --recursive ./test",
      "test:watch": "npm run test -- --watch"
    },
    "author": "",
    "license": "ISC"
   }
   ```
6. Install every packed you will need (every tools and dev-tools). For tools in this project go to directory of your current project using terminal and type:
   ```
   $ npm install --save react react-dom redux react-redux react-scripts
   $ npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react babel-preset-stage-2 webpack webpack-dev-server
   ```
7. Next go to your webpack.config.js file and type in:
   ```
   module.exports = {
    entry: [
      './src/index.js'
    ],
    output: {
      path: __dirname,
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env', 'stage-2']
        }
      }]
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './'
    },
    devtool: 'inline-source-map'
   };
   ```
8. Last file which we need to edit is .babelrc: There you need to type: 
   ```
   {
    "presets": [ "env", "react", "stage-2"]
   }
   ```
9. Now go to main directory of your project and type: 
   ```
   $ npm install
   ```
   
 After that your project is ready to code!
 
 PS: If you want to use github, I prefere to not upload node_modules and created by system or compilator not important file to repository. To do that create file '.gitignore' in your main directory and type in: 
```
/node_modules
bundle.js
npm-debug.log
.DS_Store

# IntelliJ
*.iml
/.idea
```
