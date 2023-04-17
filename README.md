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

  // customize your styles:
  $react-kbar-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactKbar from '@jswork/react-kbar';
  import styled from 'styled-components';

  const Container = styled.div`
    width: 80%;
    margin: 30px auto 0;
  `;

  export default (props: any) => {
    return (
      <Container>
        <ReactKbar />
      </Container>
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
