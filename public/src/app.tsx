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
