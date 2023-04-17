import React from 'react';
import { KBarResults, ActionId, ActionImpl, useMatches } from 'kbar';
import cx from 'classnames';

const ResultItem = React.forwardRef(
  (
    {
      action,
      active,
      currentRootActionId
    }: {
      action: ActionImpl;
      active: boolean;
      currentRootActionId: ActionId;
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const ancestors = React.useMemo(() => {
      if (!currentRootActionId) return action.ancestors;
      const index = action.ancestors.findIndex((ancestor) => ancestor.id === currentRootActionId);
      // +1 removes the currentRootAction; e.g.
      // if we are on the "Set theme" parent action,
      // the UI should not display "Set theme… > Dark"
      // but rather just "Dark"
      return action.ancestors.slice(index + 1);
    }, [action.ancestors, currentRootActionId]);
    //opacity: 0;
    // transform: scale(0.99); max-width: 600px; width: 100%; background: var(--background); color: var(--foreground); border-radius: 8px; overflow: hidden; box-shadow: var(--shadow); pointer-events: auto;
    return (
      <div ref={ref} className={cx('react-kbar__hot-results', { active })}>
        <div>
          {action.icon && action.icon}
          <div>
            <div>
              {ancestors.length > 0 &&
                ancestors.map((ancestor) => (
                  <React.Fragment key={ancestor.id}>
                    <span
                      style={{
                        opacity: 0.5,
                        marginRight: 8
                      }}>
                      {ancestor.name}
                    </span>
                    <span
                      style={{
                        marginRight: 8
                      }}>
                      &rsaquo;
                    </span>
                  </React.Fragment>
                ))}
              <span>{action.name}</span>
            </div>
            {action.subtitle && <span style={{ fontSize: 12 }}>{action.subtitle}</span>}
          </div>
        </div>
        {action.shortcut?.length ? (
          <div aria-hidden className="react-kbar__shortcut">
            {action.shortcut.map((sc) => (
              <kbd className="react-kbar__kbd" key={sc}>
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
);

export default function Results() {
  const { results, rootActionId } = useMatches();
  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => {
        if (typeof item === 'string') return <div className="react-kbar__group-name">{item}</div>;
        return (
          <ResultItem action={item} active={active} currentRootActionId={rootActionId as string} />
        );
      }}
    />
  );
}
