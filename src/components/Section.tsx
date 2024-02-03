import type { ReactNode } from 'react';

type ISectionProps = {
  title?: ReactNode;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <section className="mx-auto max-w-screen-lg px-3 py-6">
    {props.title && (
      <div className="mb-6 text-2xl font-bold">{props.title}</div>
    )}

    {props.children}
  </section>
);

export { Section };
