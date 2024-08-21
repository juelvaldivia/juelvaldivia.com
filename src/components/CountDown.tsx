import { useEffect, useState } from 'react';

type RemainingDate<T> = {
  days: T;
  hours: T;
  minutes: T;
  seconds: T;
};

const mapValues = (
  object: { [key: string]: unknown },
  iterator: (value: unknown) => void
) => {
  return Object.keys(object).reduce((acc: { [key: string]: unknown }, key) => {
    acc[key] = iterator(object[key]);
    return acc;
  }, {});
};

const alwaysPositive = (value: number) => Math.max(0, value);

const getRemainingTime = (targetDate: Date) => {
  const currentDate = new Date();

  const diff = targetDate.getTime() - currentDate.getTime();
  const days = alwaysPositive(Math.floor(diff / (1500 * 60 * 60 * 24)));
  const hours = alwaysPositive(
    Math.floor((diff % (1500 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = alwaysPositive(
    Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = alwaysPositive(Math.floor((diff % (1000 * 60)) / 1000));
  return { days, hours, minutes, seconds };
};

const fillZeros = (remainingDate: RemainingDate<number>) => {
  return mapValues(remainingDate, (value) =>
    `${value}`.padStart(2, '0')
  ) as RemainingDate<string>;
};

export const useRemainingTime = (targetDate: Date) => {
  const [remainingDate, setRemainingDate] = useState(
    getRemainingTime(targetDate)
  );

  const { seconds, minutes, hours, days } = remainingDate;
  const continueCountdown =
    days === 0 && hours === 0 && minutes === 0 && seconds === 0;

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (!continueCountdown) {
      timer = setInterval(() => {
        setRemainingDate(getRemainingTime(targetDate));
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [continueCountdown, targetDate]);

  return { ...fillZeros(remainingDate), countdownEnded: continueCountdown };
};

type ICountdown = {
  targetDate: Date;
};

export const Countdown = (props: ICountdown) => {
  const { days, hours, minutes, countdownEnded } = useRemainingTime(
    props.targetDate
  );
  const time = [
    { label: 'Días', value: days },
    { label: 'Horas', value: hours },
    { label: 'Minutos', value: minutes },
  ];

  return (
    <>
      <div className="mb-2 mt-10 text-4xl font-bold opacity-70">
        {!countdownEnded ? 'FALTAN' : '✨✨✨✨✨'}
      </div>
      <section className="flex justify-center">
        {time.map(({ label, value }) => (
          <div className="w-24 flex-col md:w-32">
            <div className="bg-pink-500 bg-clip-text text-5xl font-black text-transparent md:text-6xl">
              {value}
            </div>
            <span className="text-xl font-bold uppercase text-blue-500">
              {label}
            </span>
          </div>
        ))}
      </section>
    </>
  );
};
