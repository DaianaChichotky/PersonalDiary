const Header = ({ onAddEntry }) => {
  return (
    <header className='navbar bg-neutral text-neutral-content px-6'>
      <h1 className='text-xl font-semibold'>Personal Diary</h1>

      <button className='btn btn-primary ml-auto' onClick={onAddEntry}>
        + Add Entry
      </button>
    </header>
  );
};

export default Header;
