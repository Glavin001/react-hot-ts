import * as React from 'react';

export function Layout({ children }: {children?: JSX.Element}) {
  return (
    <div>
      <h1>Hello, world!</h1>
      {children}
    </div>
  )
}
