# add styles


## Button.css
```css
.Button {
  padding: 20px;
}
```

## Button.js
```js
import React, { Component } from 'react';
import './Button.css'; // Tell Webpack that Button.js uses these styles
class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className="Button" />;
  }
}

export default Button;
``` 

