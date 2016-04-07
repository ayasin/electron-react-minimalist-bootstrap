'use strict';

import React from 'react';

export default React.createClass({
  displayName: 'Hello-World',
  render () {
    return (
      <span>
        <h1 className='title'>
          Electron/ReactJS boilerplate project.
        </h1>
        <p>
          Thanks for checking out the React+Electron boilerplate project.  Here are a few steps you
          can take to start making it your own.
        </p>
        <ul>
          <li>In <code>package.json</code> change the name of the package and provide a reasonable description</li>
          <li>Change line <code>6</code> of <code>main.window.html</code> to an appropriate title for your main window</li>
          <li>Remove <code>screens/components/hello.jsx</code> and replace it with your own root component</li>
          <li>On line <code>5</code> of <code>main.window.entry.js</code> replace the main component import path with your own root component</li>
          <li>Replace <code>main.window.css</code> with something more appropriate to your project</li>
          <li>It's important to remember to add <b>main process</b> dependencies to <code>./app/package.json</code> and <b>frontend</b> dependencies to <code>./pacakge.json</code></li>
          <li>Hack away and make something awesome!</li>
        </ul>
        <p><b>Why are there 2 package.json files?</b>  Good question!  For 2 reasons.  First, it avoids having a bunch of stuff in your final app that are dev dependancies as well
        as avoiding duplicating libraries that are already bundled into your final bundle.js file.  Secondly it allows you to build platform specific native modules for each platform without a
        bunch of jumping through hoops if you later decide to use electron builder</p>
      </span>
    );
  }
});
