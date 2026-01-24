const AddEntryModal = ({ onClose }) => {
  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
      <div className='bg-base-100 rounded-lg w-full max-w-lg p-6 space-y-4'>
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
