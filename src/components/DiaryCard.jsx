const DiaryCard = ({ entry, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className='cursor-pointer p-4 bg-yellow-100 shadow-lg rounded-xl transform hover:scale-105 hover:rotate-1 transition-all duration-300'
    >
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
