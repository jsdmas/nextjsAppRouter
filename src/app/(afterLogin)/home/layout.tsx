import { PropsWithChildren } from 'react';

interface HomeLayout extends PropsWithChildren {}
export default async function HomeLayout({ children }: HomeLayout) {
  return (
    <div>
      <h1>홈 레이아웃</h1>
      {children}
    </div>
  );
}
