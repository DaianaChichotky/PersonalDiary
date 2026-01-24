import { useEffect } from 'react';

const EntryDetailModal = ({ onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div
      className='
        fixed inset-0 z-50
        bg-black/50
        flex items-center justify-center
        animate-fadeIn
      '
      onClick={onClose}
    >
      <div
        className='
          bg-base-100
          rounded-lg
          w-full max-w-2xl
          p-6
          relative
          animate-scaleIn
        '
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='btn btn-sm btn-circle btn-ghost absolute right-4 top-4'
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src='https://picsum.photos/800/400'
          alt='Diary entry'
          className='rounded-lg mb-4'
        />

        <p className='text-sm text-gray-500 mb-1'>April 23, 2024</p>

        <h2 className='text-2xl font-semibold mb-4'>Beach Sunset</h2>

        <p className='leading-relaxed'>
          Watched a beautiful sunset by the sea. The colors were unreal and the
          moment felt peaceful and timeless.
        </p>
      </div>
    </div>
  );
};

export default EntryDetailModal;
