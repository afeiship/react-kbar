import React from 'react';
import ReactKbar from '../../src/main';
// import styled from 'styled-components';
import { KBarProvider, KBarPortal, KBarPositioner, KBarAnimator, KBarSearch } from 'kbar';
import Results, { animatorStyle, searchStyle } from './hot-result';

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
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator style={animatorStyle}>
            <KBarSearch style={searchStyle} />
            <Results />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      <ReactKbar />
    </KBarProvider>
  );
};
