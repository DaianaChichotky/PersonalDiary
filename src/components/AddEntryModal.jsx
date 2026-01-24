import { useEffect } from 'react';

const AddEntryModal = ({ onClose }) => {
  // ESC key support
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
      onClick={onClose} // backdrop click
    >
      <div
        className='
          bg-base-100
          rounded-lg
          w-full max-w-lg
          p-6
          space-y-4
          animate-scaleIn
        '
        onClick={(e) => e.stopPropagation()} // prevent close on content click
      >
        <h2 className='text-xl font-semibold'>Add New Entry</h2>

        <input className='input input-bordered w-full' placeholder='Title' />
        <input type='date' className='input input-bordered w-full' />
        <input
          className='input input-bordered w-full'
          placeholder='Image URL'
        />

        <textarea
          className='textarea textarea-bordered w-full'
          placeholder='Write your entry...'
        />

        <div className='flex justify-end gap-3'>
          <button className='btn btn-ghost' onClick={onClose}>
            Cancel
          </button>
          <button className='btn btn-primary'>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddEntryModal;
