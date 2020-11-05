# alias not support 
- https://github.com/facebook/create-react-app/issues/9429
- https://github.com/facebook/create-react-app/blob/ed958938f642007645dd5ac3466db36202f8754e/packages/react-scripts/scripts/utils/verifyTypeScriptSetup.js#L159

```js
// tsconfig 加一个 
"noFallthroughCasesInSwitch":true 
```
