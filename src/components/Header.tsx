import * as React from 'react';

export interface IAppProps {
}

export function Header (props: IAppProps) {
  return (
    <div className='w-full px-4 py-4 bg-red-400'>
      <h1>HEADER</h1>
    </div>
  );
}
