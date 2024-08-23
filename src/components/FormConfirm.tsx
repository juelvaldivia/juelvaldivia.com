import type { GuestsRecord } from '../database/xata';

type IFormProps = {
  guest: GuestsRecord;
  endDate?: string | undefined | null;
};

const FormConfirm = (props: IFormProps) => {
  const confirmUrl = `/invitaciones/confirm/${props.guest.id}/`;
  const noConfirmUrl = `/invitaciones/no-confirm/${props.guest.id}/`;

  return (
    <section className="scale-90">
      {props.guest.confirmed === null && (
        <p className="font-extrabold uppercase">Vasir o no vasir?</p>
      )}

      {props.guest.confirmed !== null && (
        <div>
          <p className="font-bold">Quieres cambiar de opinión?</p>
          {props.endDate && (
            <>
              <p className="mb-4 font-extrabold">
                Recuerda que puedes hacerlo antes del:{' '}
              </p>
              <p className="mb-4 font-extrabold">{props.endDate}</p>
            </>
          )}
          <p className="mb-4 text-lg">
            * Tu última confirmación fue:
            <label className="text-2xl">
              {props.guest.confirmed === true
                ? ' Si podré asistir'
                : ' No podré asistir :c'}
            </label>
          </p>
        </div>
      )}
      <div className="flex justify-center space-x-4 py-4">
        <a
          href={confirmUrl}
          className="animate-pulse rounded border border-[#5787e9] bg-[#80b0ff] px-8 py-4 font-extrabold uppercase text-white transition delay-150 duration-300 ease-in-out hover:bg-[#86d1f0]"
        >
          Si voyir
        </a>
        <a
          href={noConfirmUrl}
          className="rounded border border-[#eda7fb] bg-[#ffc1d9] px-8 py-4 font-extrabold uppercase text-white hover:bg-[#febeda]"
        >
          No voyir
        </a>
      </div>
    </section>
  );
};

export { FormConfirm };
