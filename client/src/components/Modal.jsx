import { useEffect } from "react";

export default function Modal({ open, title, children, onClose }) {

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="w-full max-w-lg rounded-xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-lg font-semibold">HOHOH{title}</h2>

          <button
            onClick={onClose}
            className="text-2xl leading-none text-gray-500 hover:text-black"
          >
            &times;
          </button>
        </div>

        <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
}