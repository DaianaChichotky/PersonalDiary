import { useState } from 'react';

const AddEntryModal = ({ onAddEntry, onClose }) => {
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

    onAddEntry({
      id: Date.now(),
      ...formData,
    });

    setFormData({
      title: '',
      date: '',
      image: '',
      content: '',
    });

    onClose(); 
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box bg-yellow-100">
        <h3 className="font-bold text-xl text-center mb-4">New Entry</h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="input input-bordered w-full"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="date"
            className="input input-bordered w-full"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="input input-bordered w-full"
            value={formData.image}
            onChange={handleChange}
            required
          />

          <textarea
            name="content"
            placeholder="Write your story..."
            className="textarea textarea-bordered w-full"
            rows="4"
            value={formData.content}
            onChange={handleChange}
            required
          />

          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Save Entry
            </button>

            <button type="button" className="btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEntryModal;
