const DiaryCard = ({ entry, onSelect, onDelete }) => {
  return (
    <div
      onClick={onSelect}
      className="relative cursor-pointer p-4 bg-yellow-100 shadow-lg rounded-xl
                 transform hover:scale-105 hover:rotate-1 transition-all duration-300"
    >
      {/* DELETE BUTTON */}
      <button
        onClick={(e) => {
          e.stopPropagation(); //it stops the click from propagating to the card's onClick
          onDelete(entry.id);
        }}
        className="absolute top-2 right-2 bg-red-500 text-white text-xs
                   px-2 py-1 rounded-full hover:bg-red-600"
      >
        Delete Memory
      </button>

      {/* IMAGE */}
      <div className="h-44 overflow-hidden rounded-lg">
        <img
          src={entry.image}
          alt={entry.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div
        style={{ fontFamily: "'Patrick Hand', cursive" }}
        className="bg-white p-4 text-center mt-2 rounded-lg"
      >
        <h2 className="text-lg font-semibold">{entry.title}</h2>

        <p className="text-xs text-gray-500 mt-1">
          {new Date(entry.date).toLocaleDateString('en-GB', {
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
