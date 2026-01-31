import { useState } from 'react';

const EditEntryModal = ({ entry, onClose, onSave }) => {
  const [formData, setFormData] = useState(entry);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, id: entry.id });
  };

  return (
    <dialog open className='modal modal-middle'>
      <div className='modal-box w-96 max-w-none p-4'>
        <h3 className='text-xl font-bold mb-4'>Edit Entry</h3>
        <form onSubmit={handleSubmit} className='space-y-3'>
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={handleChange}
            className='input input-bordered w-full'
          />
          <input
            type='date'
            name='date'
            value={formData.date}
            onChange={handleChange}
            className='input input-bordered w-full'
          />
          <input
            type='text'
            name='image'
            value={formData.image}
            onChange={handleChange}
            className='input input-bordered w-full'
          />
          <textarea
            name='content'
            value={formData.content}
            onChange={handleChange}
            className='textarea textarea-bordered w-full'
            rows={4}
          />
          <div className='modal-action'>
            <button type='submit' className='btn btn-primary'>
              Save
            </button>
            <button type='button' className='btn' onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default EditEntryModal;
