const DiaryCard = () => {
  return (
    <div
      className='
        group
        card
        bg-base-100
        shadow-md
        transition
        duration-300
        ease-out
        hover:-translate-y-1
        hover:shadow-2xl
        cursor-pointer
      '
    >
      {/* Image */}
      <figure className='h-48 overflow-hidden rounded-t-xl'>
        <img
          src='https://picsum.photos/400/300'
          alt='Diary preview'
          className='
            w-full
            h-full
            object-cover
            transition-transform
            duration-300
            ease-out
            group-hover:scale-105
          '
        />
      </figure>

      {/* Content */}
      <div className='card-body'>
        <p className='text-sm text-gray-500'>April 23, 2024</p>

        <h2 className='card-title text-lg'>Beach Sunset</h2>
      </div>
    </div>
  );
};

export default DiaryCard;
