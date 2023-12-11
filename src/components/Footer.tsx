import * as React from 'react';

export interface IAppProps {
}

export function Footer (props: IAppProps) {
  return (
    <div className='w-full px-4 py-4 bg-red-400'>
      <h1>Footer</h1>
    </div>
  );
}
