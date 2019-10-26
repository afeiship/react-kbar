# add css module
> Note: this feature is available with react-scripts@2.0.0 and higher.


## Button.module.css
```css
.error {
  background-color: red;
}
```

## another-stylesheet.css
```css
.error {
  color: blue;
}
```

## Button.js
```js
import React, { Component } from 'react';
import styles from './Button.module.css'; // Import css modules stylesheet as styles
import './another-stylesheet.css'; // Import regular stylesheet
class Button extends Component {
  render() {
    // reference as a js object
    return <button className={styles.error}>Error Button</button>;
  }
}
```

## classnames with module

