import { useState } from 'react';
import { DiaryCard, EntryDetailModal } from '.';

const DiaryList = ({ entries, onDelete }) => {
  const [selectedEntry, setSelectedEntry] = useState(null); //to manage which entry is selected and show the card in detail

  const sortedEntries = [...entries].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
        {sortedEntries.map((entry) => (
          <DiaryCard
            key={entry.id}
            entry={entry}
            onSelect={() => setSelectedEntry(entry)}
            onDelete={onDelete}
          />
        ))}
      </div>

      <EntryDetailModal
        entry={selectedEntry}
        onClose={() => setSelectedEntry(null)}
      />
    </>
  );
};

export default DiaryList;
