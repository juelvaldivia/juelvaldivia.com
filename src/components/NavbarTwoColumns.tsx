import type { ReactNode } from 'react';

type INavbarProps = {
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <header className="mx-auto max-w-screen-lg px-3 py-6">
    <section className="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
      {props.children}
    </section>
  </header>
);

export { NavbarTwoColumns };
