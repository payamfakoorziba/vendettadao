import React from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const SplitCard = (props: {
  left?: React.ReactNode;
  right?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>) => {
  return (
    <div {...props} className={classNames('grid md:grid-cols-2 gap-4', props.className)}>
      {props.left}  {props.right}
    </div>
  )
}

// { a: 12, a: 30}/ SplitCard className="mt-5" left={} right={}