import React, { Component } from 'react';
import { KBarProvider, KBarPortal, KBarPositioner, KBarAnimator, KBarSearch } from 'kbar';
import Results from './results';
const CLASS_NAME = 'react-kbar';

export type ReactKbarProps = {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * Kbar actions.
   */
  actions?: any[];
  /**
   * The children.
   */
  children?: any;
};

export default class ReactKbar extends Component<ReactKbarProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {};

  render() {
    const { className, actions, children, ...props } = this.props;

    return (
      <KBarProvider actions={actions} {...props}>
        <KBarPortal>
          <KBarPositioner>
            <KBarAnimator className="react-kbar__animator">
              <KBarSearch className="react-kbar__search" />
              <Results />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        {children}
      </KBarProvider>
    );
  }
}
