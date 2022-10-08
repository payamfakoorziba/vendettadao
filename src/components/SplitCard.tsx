import React from 'react';



export const SplitCard = ({children, ...props}: {
  children: React.ReactNode;
}) => {
  return (
    <div {...props}>
    {children}
    </div>
  )
}