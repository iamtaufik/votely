export default function Tooltip({ message, children }: { message: string; children: React.ReactNode }) {
  return (
    <div className="relative flex py-2 group">
      {children}
      <span className="absolute p-2 -mx-2 text-xs text-white transition-all scale-0 rounded bg-zinc-900 -top-7 group-hover:scale-100">{message}</span>
    </div>
  );
}
