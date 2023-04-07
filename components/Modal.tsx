import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

interface IModal {
  isOpen?: boolean;
  title: string;
  positiveText?: string;
  negativeText?: string;
  onPositiveClick?: () => Promise<void>;
  onNegativeClick?: () => void;
}

const Modal = (props: IModal) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);
  return (
    <div className={`relative z-10 ${!isOpen && 'hidden'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-zinc-900 bg-opacity-40 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all p-4 rounded-md">
            {/* Content */}
            <div className="w-full p-5 text-center">
              <p className="text-2xl font-bold text-[#4A1B9D]">{props.title || 'Title'}</p>
              <div className={`flex justify-evenly mt-5`}>
                <button
                  className="text-sm bg-zinc-100 px-2 py-1 hover:bg-zinc-200 text-[#3C3C3C]"
                  onClick={() => {
                    props.onNegativeClick;
                    setIsOpen(false);
                  }}
                >
                  {props.negativeText || 'Kembali'}
                </button>
                <button
                  className={`text-sm bg-red-50 px-2 py-1 hover:bg-red-200 text-red-600 ${!props.onPositiveClick && 'hidden'}`}
                  onClick={() => {
                    props.onPositiveClick && props.onPositiveClick();
                    setIsOpen(false);
                  }}
                >
                  {props.positiveText || 'Ya'}
                </button>
              </div>
            </div>

            {/* End Content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export function ShowModal(props: IModal) {
  const alert = document.createElement('div');
  alert.id = 'alert';
  document.body.appendChild(alert);
  const root = createRoot(alert);
  root.render(<Modal isOpen={true} title={props.title} negativeText={props.negativeText} positiveText={props.positiveText} onNegativeClick={props.onNegativeClick} onPositiveClick={props.onPositiveClick} />);
}
