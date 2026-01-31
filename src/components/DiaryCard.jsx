const DiaryCard = ({ entry, onSelect, onDelete, onEdit }) => {
  return (
    <div
      onClick={onSelect}
      className='relative cursor-pointer p-4 bg-yellow-100 shadow-lg rounded-xl transform hover:scale-105 hover:rotate-1 transition-all duration-300'
    >
      {/* Delete button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(entry.id);
        }}
        className='absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full hover:bg-red-600 cursor-pointer'
      >
        Delete Entry
      </button>

      {/* Edit button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onEdit(entry);
        }}
        className='absolute top-2 right-23 bg-blue-500 text-white text-xs px-2 py-1 rounded-full hover:bg-blue-600 cursor-pointer'
      >
        Edit
      </button>

      {/* Image */}
      <div className='h-44 overflow-hidden'>
        <img
          src={entry.image}
          alt={entry.title}
          className='w-full h-full object-cover'
        />
      </div>

      {/* Content */}
      <div
        style={{ fontFamily: "'Patrick Hand', cursive" }}
        className='bg-white p-4 text-center'
      >
        <h2 className='text-lg'>{entry.title}</h2>

        <p className='text-xs text-gray-500 mt-1'>
          {new Date(entry.date).toLocaleDateString('en-EN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
      </div>
    </div>
  );
};

export default DiaryCard;
