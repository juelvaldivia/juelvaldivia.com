import type { ReactNode } from 'react';

type PresenterProps = {
  title: ReactNode;
  description: ReactNode;
  avatar: ReactNode;
  socialButtons: ReactNode;
};

const Presenter = (props: PresenterProps) => (
  <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
    <div className="shrink-0">{props.avatar}</div>

    <div>
      <h1 className="text-3xl font-bold">{props.title}</h1>

      <p className="mt-6 text-xl leading-9">{props.description}</p>

      <div className="mt-5 flex gap-2">{props.socialButtons}</div>
    </div>
  </div>
);

export { Presenter };
