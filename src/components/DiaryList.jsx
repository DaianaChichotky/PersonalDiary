import DiaryCard from './DiaryCard';

const DiaryList = () => {
  return (
    <section className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      <DiaryCard />
      <DiaryCard />
      <DiaryCard />
    </section>
  );
};

export default DiaryList;
