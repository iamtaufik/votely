'use client';

interface IButton {
  text: string;
  type: 'button' | 'submit';
  className?: string;
  onClick: () => void;
}

const Button = ({ text, type, className, onClick }: IButton) => {
  return (
    <button
      type={type}
      className={`${className} px-4 py-2 rounded-sm  text-base font-semibold `}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {text}
    </button>
  );
};

export default Button;
