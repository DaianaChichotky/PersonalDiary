import { useState } from 'react';

const AddEntryModal = ({ onAddEntry }) => {
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
    document.getElementById('my_modal_5').close();
  };

  return (
    <>
      <div className='flex justify-start'>
        <button
          className='bg-yellow-200 hover:bg-yellow-300 text-gray-800 cursor-pointer font-bold font-handwriting 
    px-10 py-4 text-lg rounded-xl shadow-lg transform hover:rotate-1 hover:scale-105 
    transition-all duration-300 mt-8 mb-8 ml-4'
          onClick={() => document.getElementById('modal').showModal()}
        >
          Add New Entry
        </button>
      </div>

      <dialog id='my_modal_5' className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box bg-yellow-100 rounded-xl shadow-lg max-w-md p-6 font-handwriting'>
          <h3 className='font-bold text-xl text-center mb-4'>New Entry</h3>

          <form onSubmit={handleSubmit} className='space-y-3'>
            {/* Title */}
            <input
              type='text'
              name='title'
              placeholder='Title'
              className='input input-bordered w-full'
              value={formData.title}
              onChange={handleChange}
              required
            />

            {/* Date */}
            <input
              type='date'
              name='date'
              className='input input-bordered w-full'
              value={formData.date}
              onChange={handleChange}
              required
            />

            {/* Image */}
            <input
              type='text'
              name='image'
              placeholder='Image URL'
              className='input input-bordered w-full'
              value={formData.image}
              onChange={handleChange}
              required
            />

            {/* Content */}
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
                onClick={() => document.getElementById('my_modal_5').close()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default AddEntryModal;
