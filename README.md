# react-kbar
> React kbar wrapper.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-kbar
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-kbar/dist/style.css";

  // or use sass
  @import "~@jswork/react-kbar/dist/style.scss";

  body {
    font-family: Arial, Helvetica, sans-serif;
  }

  // customize your styles:
  $react-kbar-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactKbar from '../../src/main';
  import { createGlobalStyle } from 'styled-components';
  // import styled from 'styled-components';
  const GlobalStyleComp = createGlobalStyle`
    body{
      font-family: Arial, Helvetica, sans-serif;
    }
  `;

  const actions = [
    {
      id: 'blog',
      name: 'Blog',
      shortcut: ['b'],
      keywords: 'writing words',
      perform: () => (window.location.pathname = 'blog')
    },
    {
      id: 'contact',
      name: 'Contact',
      shortcut: ['c'],
      keywords: 'email',
      perform: () => (window.location.pathname = 'contact')
    }
  ];

  export default () => {
    return (
      <>
        <ReactKbar actions={actions}>
          <button>Cmd + K active ME 🦄</button>
        </ReactKbar>
        <GlobalStyleComp />
      </>
    );
  };

  ```

## preview
- https://afeiship.github.io/react-kbar/

## license
Code released under [the MIT license](https://github.com/afeiship/react-kbar/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-kbar
[version-url]: https://npmjs.org/package/@jswork/react-kbar

[license-image]: https://img.shields.io/npm/l/@jswork/react-kbar
[license-url]: https://github.com/afeiship/react-kbar/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-kbar
[size-url]: https://github.com/afeiship/react-kbar/blob/master/dist/react-kbar.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-kbar
[download-url]: https://www.npmjs.com/package/@jswork/react-kbar
