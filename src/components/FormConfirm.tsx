import type { GuestsRecord } from '../database/xata';

type IFormProps = {
  guest: GuestsRecord;
};

const FormConfirm = (props: IFormProps) => {
  const confirmUrl = `/invitaciones/confirm/${props.guest.id}/`;
  const noConfirmUrl = `/invitaciones/no-confirm/${props.guest.id}/`;

  return (
    <div className="mx-auto max-w-screen-lg px-3 py-6">
      <p className="text-lg">Confirma tu asistencia:</p>
      <div className="flex justify-center space-x-4">
        <a
          href={confirmUrl}
          className="rounded bg-blue-300 px-4 py-2 font-bold text-white hover:bg-[#86d1f0]"
        >
          Sí, voy
          <i className="fa fa-check fa-lg ml-2"></i>
        </a>
        <a
          href={noConfirmUrl}
          className="rounded bg-pink-400 px-4 py-2 font-bold text-white hover:bg-[#febeda]"
        >
          No, no puedo
        </a>
      </div>
    </div>
  );
};

export { FormConfirm };
