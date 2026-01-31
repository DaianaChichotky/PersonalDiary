import { useState } from 'react';
import { DiaryCard, EntryDetailModal, EditEntryModal } from '.';

const DiaryList = ({ entries, onDelete, onUpdateEntry }) => {
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [editingEntry, setEditingEntry] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const sortedEntries = [...entries].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const handleEdit = (entry) => {
    setEditingEntry(entry);
  };

  return (
    <>
      {successMessage && (
        <div className='fixed top-6 right-6 bg-green-500 text-white px-5 py-3 rounded-lg shadow-xl z-50 animate-bounce'>
          {successMessage}
        </div>
      )}

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
        {sortedEntries.map((entry) => (
          <DiaryCard
            key={entry.id}
            entry={entry}
            onSelect={() => setSelectedEntry(entry)}
            onDelete={onDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>

      <EntryDetailModal
        entry={selectedEntry}
        onClose={() => setSelectedEntry(null)}
      />
      {editingEntry && (
        <EditEntryModal
          entry={editingEntry}
          onClose={() => setEditingEntry(null)}
          onSave={(updatedEntry) => {
            const success = onUpdateEntry(updatedEntry);

            if (success) {
              setEditingEntry(null);
              setSuccessMessage('Entry updated successfully ✅');

              setTimeout(() => {
                setSuccessMessage('');
              }, 2000);
            }
          }}
        />
      )}
    </>
  );
};

export default DiaryList;
