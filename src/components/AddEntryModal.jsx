import { useState } from 'react';

const AddEntryModal = ({ onAddEntry, onFilterByDate }) => {
  const [isOpen, setIsOpen] = useState(false); // when first loading the page, the modal is closed
  const [selectedDate, setSelectedDate] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    image: '',
    content: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      id: Date.now(),
      ...formData,
    };

    onAddEntry(newEntry);

    // Reset form
    setFormData({
      title: '',
      date: '',
      image: '',
      content: '',
    });

    // Close modal
    setIsOpen(false);
  };

  return (
    <>
      {/* Button to add a new entry */}
      <div className='flex items-center gap-8 ml-4 mt-8 mb-8'>
        <button
          className='bg-yellow-200 hover:bg-yellow-300 text-gray-800 cursor-pointer font-bold font-handwriting 
          px-10 py-4 text-lg rounded-xl shadow-lg transform hover:rotate-1 hover:scale-105 
          transition-all duration-300 mt-8 mb-8 ml-4'
          onClick={() => setIsOpen(true)}
        >
          + Add New Entry
        </button>

        {/* Calendar to pick a date */}
        <input
          type='date'
          className='input input-bordered w-40'
          value={selectedDate}
          onChange={(e) => {
            setSelectedDate(e.target.value);
            onFilterByDate(e.target.value);
          }}
        />

        <button
          className='btn btn-sm  hover:bg-yellow-200 text-gray-800 cursor-pointer font-handwriting 
          px-10 py-4 rounded-xl shadow-lg transform hover:rotate-1 hover:scale-105 
          transition-all duration-300 mt-8 mb-8'
          onClick={() => onFilterByDate('')}
        >
          Clear dates
        </button>
      </div>

      {isOpen && (
        <dialog open className='modal modal-bottom sm:modal-middle'>
          <div className='modal-box bg-yellow-100 rounded-xl shadow-lg w-40 p-6 font-handwriting'>
            <h3 className='font-bold text-xl text-center mb-4'>New Entry</h3>

            <form onSubmit={handleSubmit} className='space-y-3'>
              <input
                type='text'
                name='title'
                placeholder='Title'
                className='input input-bordered w-full'
                value={formData.title}
                onChange={handleChange}
                required
              />

              <input
                type='date'
                name='date'
                className='input input-bordered w-full'
                value={formData.date}
                onChange={handleChange}
                required
              />

              <input
                type='text'
                name='image'
                placeholder='Image URL'
                className='input input-bordered w-full'
                value={formData.image}
                onChange={handleChange}
                required
              />

              <textarea
                name='content'
                placeholder='Write your story...'
                className='textarea textarea-bordered w-full'
                rows='4'
                value={formData.content}
                onChange={handleChange}
                required
              />

              <div className='modal-action'>
                <button type='submit' className='btn btn-primary'>
                  Save Entry
                </button>

                <button
                  type='button'
                  className='btn'
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
};

export default AddEntryModal;
