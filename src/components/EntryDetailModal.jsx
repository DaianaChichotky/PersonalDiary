const EntryDetailModal = ({ entry, onClose }) => {
  if (!entry) return null;

  return (
    <dialog open className='modal modal-middle'>
      <div className='w-96 h-125 flex flex-col cursor-pointer p-4 bg-green-100 shadow-lg rounded-xl transform hover:scale-95 hover:rotate-1 transition-all duration-300'>
        {/* Image */}
        <img
          src={entry.image}
          alt={entry.title}
          className='rounded-lg mb-3 w-full h-48 object-cover'
        />
        {/* Title */}
        <h2
          style={{ fontFamily: "'Patrick Hand', cursive" }}
          className='text-2xl font-bold text-center bg-white'
        >
          {entry.title}
        </h2>
        {/* Date */}
        <p className='text-center text-sm text-gray-500 mb-4 bg-white'>
          {new Date(entry.date).toLocaleDateString('en-EN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
        {/* Description */}
        <div className='flex-1 overflow-y-auto bg-white p-2 rounded'>
          <p
            style={{ fontFamily: "'Patrick Hand', cursive" }}
            className='text-gray-700 text-center'
          >
            {entry.content}
          </p>
        </div>

        {/* Button to close */}
        <div className='modal-action'>
          <button className='btn' onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default EntryDetailModal;
