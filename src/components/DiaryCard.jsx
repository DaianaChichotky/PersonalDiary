const DiaryCard = () => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow cursor-pointer">
      <figure className="h-48 overflow-hidden">
        <img
          src="https://picsum.photos/400/300"
          alt="Diary preview"
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body">
        <p className="text-sm text-gray-500">April 23, 2024</p>
        <h2 className="card-title text-lg">
          Beach Sunset
        </h2>
      </div>
    </div>
  );
};

export default DiaryCard;
