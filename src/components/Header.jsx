const Header = ({ onAddEntry }) => {
  return (
    <header className='navbar bg-neutral text-neutral-content px-6'>
      <button className='btn btn-primary ml-auto' onClick={onAddEntry}>
        + Add Entry
      </button>
    </header>
  );
};

export default Header;
