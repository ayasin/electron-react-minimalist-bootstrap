# A minimalist React-Electron bootstrap project

This project is designed to provide you a minimal setup to get going with Electron and a React frontend.

### Features

* ReactJS front end
* Electron packaging
* ES6 and JSX support via Babel
* Webpack to create bundles

### Usage

* Clone this repo
* Open the `./app/package.json` file
* Change the `name` `description` and `author` to something more approprate
* Open the `package.json` file at the root of the project
* Change `ElectronQuickStart` in `package-win32` `package-darwin` and `package-linux` to the name of your application
* Change the `./app/icon.ico` (Windows icon) to something appropriate for your app
* Change the `./app/icon.icns` (MAc and Linux icons) to something appropriate for your app
* Change `main.window.css` to your own CSS file
* On line 5 of `main.window.entry.js` change the import to your own root component.

### Adding npm modules

There are 2 `package.json` files.  The one at the root of your project is for all frontend libraries.  The one in `./app` is for all server side libraries (libraries you use in the main node process).  This separation avoids duplicate code being embedded into your final executable and allows you to have different targets for native modules (not covered here).

=== more to come ===
